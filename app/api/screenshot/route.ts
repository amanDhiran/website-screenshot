import { NextResponse } from 'next/server';
// import puppeteer from 'puppeteer-core';
// import chromium from '@sparticuz/chromium';
import { chromium, devices as playwrightDevices } from 'playwright';


type Device = 'desktop' | 'tablet' | 'mobile';

interface Screenshot {
  device: Device;
  url: string;
}

export async function POST(req: Request){
  const { url, devices } = await req.json();

  let browser;
  
  try {
    // if (process.env.NODE_ENV === "production") {
    //   // In production (Vercel), use chrome-aws-lambda
    //   browser = await puppeteer.launch({
    //     args: chromium.args,
    //   defaultViewport: chromium.defaultViewport,
    //   executablePath: await chromium.executablePath(),
    //   headless: chromium.headless,
    //   ignoreHTTPSErrors: true,
    // });
      
    // } else {
    //   // In development, use regular puppeteer
    //   const puppeteerDev = await import('puppeteer'); // Import dynamically for dev
    //   browser = await puppeteerDev.launch({ headless: true });
    // }
    
    browser = await chromium.launch({
      headless: true // For both development and production
    });
    
    const screenshots: Screenshot[] = [];

    for (const device of devices) {
      // const page = await browser.newPage();
      
      // // Set viewport size based on device
      // if (device === 'desktop') {
      //   await page.setViewport({ width: 1920, height: 1080 });
      // } else if (device === 'tablet') {
      //   await page.setViewport({ width: 768, height: 1024 });
      // } else if (device === 'mobile') {
      //   await page.setViewport({ width: 375, height: 667 });
      // }

      const context = await browser.newContext({
        viewport: device === 'desktop' ? { width: 1920, height: 1080 } :
                  device === 'tablet' ? { width: 768, height: 1024 } :
                                        { width: 375, height: 667 },
      });
      const page = await context.newPage();

      await page.goto(url, { waitUntil: 'networkidle' });
      
      // const screenshot = await page.screenshot({ encoding: 'base64' });
      const buffer = await page.screenshot()
      const screenshot = buffer.toString('base64')
      screenshots.push({
        device,
        url: `data:image/png;base64,${screenshot}`
      });

      await page.close();
    }

    await browser.close();

    return NextResponse.json({ screenshots }, {status: 200});
  } catch (error) {
    console.error('Error generating screenshots:', error);
    return NextResponse.json({ error: 'Failed to generate screenshots' }, { status: 500} );
  }
}