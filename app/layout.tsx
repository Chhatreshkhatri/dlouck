import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

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
  author: "Chhatresh Khatri",
  metadataBase: new URL('https://www.dlouck.com'),
  alternates: {
    canonical: "https://www.dlouck.com/",
  },
  category: "website",
  icons: {
    icon: [{ url: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
    shortcut: [
      { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
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
        {/* Google tag (gtag.js) */}
        <Script
          id="gtag"
          data-hydration="defer"
          src="https://www.googletagmanager.com/gtag/js?id=G-EFHM3M3LMZ"
          defer
        ></Script>
        <Script
          id="gtag-config"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EFHM3M3LMZ');
            `,
          }}
          defer
        ></Script>
      </body>
    </html>
  );
}
