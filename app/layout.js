import { Inter } from "next/font/google";
import "./globals.css";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

// Add SEO with keywords to this page

export const metadata = {
  title: "Aryan Shinde | Portfolio",
  description:
    "Welcome to my portfolio, here you'll get all my creatives which I've made till date!",
  keywords:
    "Aryan Shinde, Portfolio, Aryan Shinde Portfolio, Aryan Shinde Projects, Aryan Shinde Skills, Aryan Shinde Experience, Aryan Shinde Contact, Aryan Shinde Resume",
};

// export const metadata = {
//   title: "Aryan Shinde | Portfolio",
//   description: "Here's the list of the things I've done to showcase myself!",
// };

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
