import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

type Device = 'desktop' | 'tablet' | 'mobile';

interface Screenshot {
  device: Device;
  url: string;
}

export async function POST(req: Request){
  const { url, devices } = await req.json();

  try {
    const browser = await puppeteer.launch();
    const screenshots: Screenshot[] = [];

    for (const device of devices) {
      const page = await browser.newPage();
      
      // Set viewport size based on device
      if (device === 'desktop') {
        await page.setViewport({ width: 1920, height: 1080 });
      } else if (device === 'tablet') {
        await page.setViewport({ width: 768, height: 1024 });
      } else if (device === 'mobile') {
        await page.setViewport({ width: 375, height: 667 });
      }

      await page.goto(url, { waitUntil: 'networkidle2' });
      
      const screenshot = await page.screenshot({ encoding: 'base64' });
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