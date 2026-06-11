import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ibnutesfaye.github.io/My-Portfolio"),
  title: "Abdurezak | Full Stack Developer & AI Engineer",
  description:
    "Personal portfolio of Abdurezak — Full Stack Developer, AI Engineer, and Network Specialist building intelligent software systems and beautiful digital experiences.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Python",
    "Django",
    "Machine Learning",
    "Network Engineer",
    "Portfolio",
    "Abdurezak",
  ],
  authors: [{ name: "Abdurezak" }],
  creator: "Abdurezak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdurezak.dev",
    title: "Abdurezak | Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer, AI Engineer, and Network Specialist crafting intelligent software and beautiful digital experiences.",
    siteName: "Abdurezak Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdurezak Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdurezak | Full Stack Developer & AI Engineer",
    description: "Full Stack Developer, AI Engineer & Network Specialist.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
