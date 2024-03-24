import { Inter } from "next/font/google";
import "./globals.css";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryan Shinde | Portfolio",
  description: "Here's the list of the things I've done to showcase myself!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="portfolio-hetref.vercel.app"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
