import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

// Optimize font loading by only loading the weights we need
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Use 'swap' for better performance
  weights: [400, 500, 600, 700], // Only load the weights we actually use
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mr. Aryan Shinde | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Meta Data */}
        <meta
          name="description"
          content="Welcome to my portfolio, here you'll get all the creatives I've made to date!"
        />
        <meta
          name="keywords"
          content="Aryan Shinde, Portfolio, Web Developer, Designer, NextJS"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aryanshinde.in/" />
        <meta property="og:title" content="Aryan Shinde | Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my portfolio, here you'll get all the creatives I've made to date!"
        />
        <meta property="og:image" content="/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Aryan Shinde | Portfolio" />
        <meta
          property="twitter:description"
          content="Welcome to my portfolio, here you'll get all the creatives I've made to date!"
        />
        <meta property="twitter:image" content="/logo.png" />

        {/* Favicon - use a simpler favicon setup */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
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
