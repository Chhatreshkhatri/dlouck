import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dlouck | Home",
  description: "Dlouck website built with Next.js and TailwindCSS",
  keywords: [
    "Dlouck",
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind",
    "Github",
    "website",
    "Chhatresh Khatri",
  ],
  url: "https://www.dlouck.com/",
  sitename: "Dlouck",
  type: "website",
  author: "Chhatresh Khatri",
  alternates: {
    canonical: "https://www.dlouck.com/",
  },
  category: "website",
  icons: {
    icon: [{ url: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
    shortcut: [
      { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: "/app.webmanifest",
  openGraph: {
    title: "Dlouck | Home",
    description: "Dlouck website built with Next.js and TailwindCSS",
    url: "https://www.dlouck.com/",
    type: "website",
    site_name: "Dlouck",
    author: "Chhatresh Khatri",
  },
  twitter: {
    title: "Dlouck | Home",
    url: "https://www.dlouck.com/",
    description: "Dlouck website built with Next.js and TailwindCSS",
    card: "summary",
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
