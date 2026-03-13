import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Bindu Chandra Shekar Reddy | AI/ML Portfolio",
  description:
    "AI/ML engineer focused on multimodal transformers (EEG + ECG), applied machine learning, and full-stack delivery.",
  metadataBase: new URL("https://binduchandrashekarreddy.com"),
  openGraph: {
    title: "Bindu Chandra Shekar Reddy | AI/ML Portfolio",
    description:
      "Projects in multimodal transformers, medical ML diagnostics, edge health monitoring, and computer vision.",
    url: "https://binduchandrashekarreddy.com",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
