import Header from "@/app/components/Header";
import BlogArticle from "@/app/components/BlogArtilcleComponent2";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clarity is the Foundation of High Performing Design | MitrevDesign",
  description: "Creativity gets attention, but clarity earns trust. This is why the best websites feel obvious and convert better.",
  openGraph: {
    title: "Clarity is the Foundation of High Performing Design",
    description: "Creativity gets attention, but clarity earns trust. This is why the best websites feel obvious and convert better.",
    url: "https://mitrevdarko.dev/blog/design-is-not-decoration/clarity-is-the-foundation-of-high-performing-design",
    type: "article",
    images: [{ url: "https://mitrevdarko.dev/Projects-Images/Blog-Post-2-Graph.png", width: 1200, height: 630 }],
  },
  authors: [{ name: "Mike Tretyak" }],
};



export default function Page() {
  return (
    <>
      <Header />
      <BlogArticle />
      <CTASection />
      <Footer />
    </>
  );
}