import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

import localFont from "next/font/local";

const customFont = localFont({
  src: [
    {
      path: "../public/font/SpotifyMix-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/SpotifyMix-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/SpotifyMix-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/SpotifyMix-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/font/SpotifyMix-Extrabold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spotify",
  description: "Update your account details",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${customFont.variable} font-sans`}>
      <head>
        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
          href="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png"
        />
      </head>
      <body
        className={`antialiased min-h-screen`}
        style={{
          fontFamily: "var(--font-custom)",
        }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
