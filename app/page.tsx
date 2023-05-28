import Image from "next/image";

export const metadata = {
  title: "Dlouck | Home",
  description: "Dlouck website built with Next.js and TailwindCSS",
  url: "https://www.dlouck.com",
  sitename: "Dlouck",
  type: "website",
  author: "Dlouck",
  alternates: {
    canonical: "https://www.dlouck.com",
  },
  category: "website",
  icons: {
    icon: [{url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml'}],
    shortcut: [{url: '/favicon.ico', sizes: '16x16 32x32', type: 'image/x-icon'}],
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
export default function Home() {
  return (
    <main>
      <div className="flex justify-center pt-24">
        <h1>Welcome to dlouck.com</h1>
      </div>
    </main>
  );
}
