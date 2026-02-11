import type { Metadata } from "next";
import "./globals.css";

import { inter, grotesk } from "./fonts";


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
         
      </body>
    </html>
  );
}

<form name="contact" data-netlify="true" hidden>
  <input type="hidden" name="form-name" value="contact" />
</form>



