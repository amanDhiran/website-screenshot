import { Hero } from "@/components/Hero";
import Head from "next/head";

export default function Home() {

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Website Screenshot Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mb-16 mt-6">
          <h1 className="text-3xl lg:text-5xl max-w-3xl mx-auto text-center font-bold">
            Effortless Website Snapshots for Desktop, Tablet, and Mobile 
          </h1>
        </div>

        <Hero/>
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">How It Works</h2>
          <div className="max-w-2xl mx-auto">
            <ol className="list-decimal list-inside space-y-4">
              <li>Enter the website URL you want to capture</li>
              <li>Select the devices you need screenshots for (Desktop, Tablet, Mobile)</li>
              <li>Click the "Generate Screenshots" button</li>
              <li>Wait a few moments while we create your screenshots</li>
              <li>Download or share your generated screenshots</li>
            </ol>
          </div>
        </section>
        
        <section className="mt-16 bg-purple-100 p-10 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-9">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-orange-50 p-6 text-orange-700 rounded-lg shadow">
              <h3 className="font-bold text-2xl mb-2">Simple and Easy to Use</h3>
              <p>Generate screenshots with just a few clicks, no technical skills required.</p>
            </div>
            <div className="bg-cyan-50 text-cyan-800 p-6 rounded-lg shadow">
              <h3 className="font-bold text-2xl mb-2">Multiple Device Support</h3>
              <p>Capture screenshots for desktop, tablet, and mobile devices all at once.</p>
            </div>
            <div className="bg-emerald-50 text-emerald-700 p-6 rounded-lg shadow">
              <h3 className="font-bold text-2xl mb-2">Secure and Private</h3>
              <p>We prioritize your privacy and securely handle all screenshot requests.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
