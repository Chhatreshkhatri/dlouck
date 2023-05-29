import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dlouck | Empowering Web Experiences",
  description:
  "Dlouck is a dynamic website crafted by Chhatresh Khatri with Next.js, a powerful framework for building modern web applications. Immerse yourself in beautifully designed and responsive pages, expertly powered by the latest web technologies. Explore the seamless integration of Next.js, Typescript and TailwindCSS, offering a delightful user experience. Discover captivating content and innovative features that showcase the art of web development at its finest.",
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
      "Discover the empowering and engaging web experiences offered by Dlouck. This dynamic website is built by Chhatresh Khatri using Next.js, a powerful framework for modern web applications. Explore beautifully designed and responsive pages, powered by the latest web technologies, including Next.js,Typescript and TailwindCSS. Immerse yourself in captivating content and innovative features that showcase the art of web development at its finest.",
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
      "Discover the empowering and engaging web experiences offered by Dlouck. This dynamic website is built by Chhatresh Khatri using Next.js, a powerful framework for modern web applications. Explore beautifully designed and responsive pages, powered by the latest web technologies, including Next.js,Typescript and TailwindCSS. Immerse yourself in captivating content and innovative features that showcase the art of web development at its finest.",
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
