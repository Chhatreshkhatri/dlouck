import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dlouck | Home",
  description: "Dlouck website built with Next.js and TailwindCSS",
  keywords: ["Dlouck", "Next.js", "React", "JavaScript", "Github", "website"],
  url: "https://www.dlouck.com",
  sitename: "Dlouck",
  type: "website",
  author: "Dlouck",
  alternates: {
    canonical: "https://www.dlouck.com",
  },
  category: "website",
  icons: {
    icon: [{ url: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
    shortcut: [
      { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
    ],
  },
  manifest: "/app.webmanifest",
  openGraph: {
    title: "Dlouck | Home",
    description: "Dlouck website built with Next.js and TailwindCSS",
    url: "https://www.dlouck.com",
    type: "website",
    site_name: "Dlouck",
    author: "Dlouck",
  },
  twitter: {
    title: "Dlouck | Home",
    url: "https://www.dlouck.com",
    description: "Dlouck website built with Next.js and TailwindCSS",
    card: "summary",
    creator: "@mackXsun",
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
        <script
          data-hydration="defer"
          src="https://www.googletagmanager.com/gtag/js?id=G-EFHM3M3LMZ"
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EFHM3M3LMZ');
            `,
          }}
          defer
        ></script>
      </body>
    </html>
  );
}
