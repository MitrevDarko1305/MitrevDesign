import type { Metadata } from "next";
import "./globals.css";
import { inter, grotesk } from "./fonts";
import Script from "next/script";


export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};


export const metadata: Metadata = {
  title: "Mitrev Design",
  description: "Modern web agency for startups and businesses.",

   icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${grotesk.variable}`}
    >
     
      <body className="antialiased overflow-x-hidden">{children}
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WY3S578VDD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WY3S578VDD');
          `}
        </Script>
      </body>
    </html>
  );
}

<form name="contact" data-netlify="true" hidden>
  <input type="hidden" name="form-name" value="contact" />
</form>



