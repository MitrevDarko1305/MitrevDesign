import type { Metadata } from "next";
import "./globals.css";
import { inter, grotesk } from "./fonts";
import Script from "next/script";
import ScrollTracker from "./components/SubscriptionSection/ScrollTracker";


export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};


export const metadata: Metadata = {
  title: "Mitrev Design - Modern Web Development Agency",
  description: "We build modern websites and digital systems for startups and businesses. Fast, scalable and secure web development services.",
  authors: [{ name: "Darko Mitrev" }],
  robots: "index, follow",
  openGraph: {
    title: "Mitrev Design - Modern Web Development",
    description: "We build modern websites and digital systems for startups and businesses. Fast, scalable and secure web development services.",
    url: "https://www.mitrevdarko.dev",
    siteName: "Mitrev Design",
    type: "website",
    images: [
      {
        url:"https://www.mitrevdarko.dev/Projects-Images/Mitrev-Design-Graph.png",
        width: 1200,
        height: 630,
        alt: "Mitrev Design agency website preview",
      }
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${grotesk.variable}`}
    >
     
      <body className="antialiased overflow-x-hidden">
        <ScrollTracker/> {/*tracking scroll for analytics*/}
        {children}
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



