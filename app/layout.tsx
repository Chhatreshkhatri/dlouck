import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dlouck | Empowering Web Experiences",
  description:
    "Dlouck: a dynamic website by Chhatresh Khatri with Next.js, Typescript and TailwindCSS. Explore innovative features and captivating content.",
  keywords: [
    "Dlouck",
    "Next.js",
    "React",
    "JavaScript",
    "TailwindCSS",
    "web development",
    "frontend development",
    "Github Actions",
    "Chhatresh Khatri",
  ],
  sitename: "Dlouck",
  type: "website",
  authors: [{ name: "Chhatresh Khatri" }],
  metadataBase: new URL("https://www.dlouck.com"),
  alternates: {
    canonical: "https://www.dlouck.com/",
  },
  category: "website",
  icons: {
    shortcut: [
      {url:'/d16x16',sizes:'16x16',type:'image/png'},
    ],
    icon: [
      { url: "/d32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/d48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/app.webmanifest",
  openGraph: {
    title: "Dlouck | Empowering Web Experiences",
    description:
      "Dlouck: a dynamic website by Chhatresh Khatri with Next.js, Typescript and TailwindCSS. Explore innovative features and captivating content.",
    url: "https://www.dlouck.com/",
    type: "website",
    images: "/og_t_image.png",
    site_name: "Dlouck",
    author: "Chhatresh Khatri",
  },
  twitter: {
    title: "Dlouck | Empowering Web Experiences",
    url: "https://www.dlouck.com/",
    description:
      "Dlouck: a dynamic website by Chhatresh Khatri with Next.js, Typescript and TailwindCSS. Explore innovative features and captivating content.",
    images: "/og_t_image.png",
    card: "summary_large_image",
    creator: "@chhatreshkhatri",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
