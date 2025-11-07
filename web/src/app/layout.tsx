import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Nav from "../components/Nav";
import SideShiftBanner from "../components/SideShiftBanner";

export const metadata: Metadata = {
  title: "BlockShopy - Multi-Chain Digital Marketplace",
  description: "Buy and sell digital products with any cryptocurrency through SideShift",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "48x48",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-50">
              <SideShiftBanner />
              <Nav />
            </div>
            <main className="flex-grow">
              {children}
            </main>
            <footer className="bg-gray-50 border-t">
              <div className="max-w-7xl mx-auto py-12 px-6">
                <div className="text-center">
                  <p className="text-gray-600">
                    Powered by SideShift API - Accept 50+ cryptocurrencies instantly
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
