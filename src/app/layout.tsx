import type { Metadata, Viewport } from "next";
import { mulish, tiktokSans } from "./fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "So Fresh — Fitnessstudio in Zürich",
  description: "So Fresh — Fitnessstudio in Zürich mit Krafttraining, Kursen und Personal Training.",
  openGraph: {
    title: "So Fresh — Fitnessstudio in Zürich",
    description: "So Fresh — Fitnessstudio in Zürich mit Krafttraining, Kursen und Personal Training.",
    locale: "de_CH",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${mulish.variable} ${tiktokSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
