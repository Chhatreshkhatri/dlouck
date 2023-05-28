import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="favicon.svg" type="image/svg+xml" sizes="any"/> */}
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
