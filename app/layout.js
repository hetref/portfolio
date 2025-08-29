import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

// Optimize font loading by only loading the weights we need
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Use 'swap' for better performance
  weight: ["400", "500", "600", "700"], // Only load the weights we actually use
});

export const metadata = {
  metadataBase: new URL('https://www.aryanshinde.in'),
  title: "Mr. Aryan Shinde | Portfolio",
  description: "Welcome to my portfolio, here you'll get all the creatives I've made to date!",
  keywords: "Aryan Shinde, Portfolio, Web Developer, Designer, NextJS",
  
  openGraph: {
    type: "website",
    url: "https://www.aryanshinde.in/",
    title: "Aryan Shinde | Portfolio",
    description: "Welcome to my portfolio, here you'll get all the creatives I've made to date!",
    images: ["/logo.png"],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Aryan Shinde | Portfolio",
    description: "Welcome to my portfolio, here you'll get all the creatives I've made to date!",
    images: ["/logo.png"],
  },
  
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  manifest: "/favicon/manifest.json",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
      </body>
    </html>
  );
}
