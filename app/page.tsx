import { Hero } from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Screenshot Generator",
};

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-16 mt-6">
        <h1 className="text-3xl lg:text-5xl max-w-3xl mx-auto text-center font-bold">
          Effortless Website Snapshots for Desktop, Tablet, and Mobile
        </h1>
      </div>

      <Hero />
      <section className="mt-16 bg-primary text-primary-foreground py-12 rounded-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row md:justify-between items-center max-w-4xl mx-auto">
              <div className="flex-1 text-center mb-8 md:mb-0">
                <div className="text-6xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Enter Website URL</h3>
                <p className="text-sm opacity-80">
                  Paste the URL of the website you want to capture
                </p>
              </div>
              <div className="hidden md:block text-4xl font-light">→</div>
              <div className="flex-1 text-center mb-8 md:mb-0">
                <div className="text-6xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Select Devices</h3>
                <p className="text-sm opacity-80">
                Choose desktop, tablet, mobile, or all three
                </p>
              </div>
              <div className="hidden md:block text-4xl font-light">→</div>
              <div className="flex-1 text-center">
                <div className="text-6xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Generate & Download</h3>
                <p className="text-sm opacity-80">
                  Click generate and download your screenshots
                </p>
              </div>
            </div>
          </div>
        </section>

      <section id="features" className="mt-16 bg-gray-100 p-10 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-9">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="bg-orange-50 p-6 text-orange-700 rounded-lg shadow">
            <h3 className="font-bold text-2xl mb-2">Simple and Easy to Use</h3>
            <p>
              Generate screenshots with just a few clicks, no technical skills
              required.
            </p>
          </div>
          <div className="bg-cyan-50 text-cyan-800 p-6 rounded-lg shadow">
            <h3 className="font-bold text-2xl mb-2">Multiple Device Support</h3>
            <p>
              Capture screenshots for desktop, tablet, and mobile devices all at
              once.
            </p>
          </div>
          <div className="bg-emerald-50 text-emerald-700 p-6 rounded-lg shadow">
            <h3 className="font-bold text-2xl mb-2">Secure and Private</h3>
            <p>
              We prioritize your privacy and securely handle all screenshot
              requests.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
