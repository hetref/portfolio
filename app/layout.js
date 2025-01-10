import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], weights: "100, 200, 300, 400, 500, 600, 700" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mr. Aryan Shinde | Portfolio</title>

        {/* Adsense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-8133714404354170"
        ></meta>

        {/* Meta Data */}
        <meta name="title" content="Aryan Shinde | Portfolio" />
        <meta
          name="description"
          content="Welcome to my portfolio, here you'll get all the creatives I've made to date!"
        />
        <meta
          name="keywords"
          content="Aryan Shinde, Portfolio, Aryan Shinde Portfolio, Aryan Shinde Projects, Aryan Shinde Skills, Aryan Shinde Experience, Aryan Shinde Contact, Aryan Shinde Resume"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aryanshinde.in/" />
        <meta property="og:title" content="Aryan Shinde | Portfolio" />
        <meta
          property="og:description"
          content="Welcome to my portfolio, here you'll get all the creatives I've made to date!"
        />
        <meta property="og:image" content="/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.aryanshinde.in/" />
        <meta property="twitter:title" content="Aryan Shinde | Portfolio" />
        <meta
          property="twitter:description"
          content="Welcome to my portfolio, here you'll get all the creatives I've made to date!"
        />
        <meta property="twitter:image" content="/logo.png" />

        {/* Favicon */}

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/favicon/manifest.json"></link>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        {children}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
