import type { Metadata } from "next";
import Header from "@/app/components/Header";
import BlogArticle from "@/app/components/BlogArticleComponent1";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Your Website is Either Selling or Costing You Money | MitrevDesign",
  description: "Your website is not just a visual asset. It's a decision making tool - and most sites quietly lose opportunities without anyone noticing.",
  openGraph: {
    title: "Your Website is Either Selling or Costing You Money",
    description: "Your website is not just a visual asset. It's a decision making tool - and most sites quietly lose opportunities without anyone noticing.",
    url: "https://mitrevdarko.dev/blog/design-is-not-decoration",
    type: "article",
    images: [{ url: "https://mitrevdarko.dev/Projects-Images/Blog-Post-1-Graph.png", width: 1200, height: 630 }],
  },
  authors: [{ name: "Darko Mitrev" }],
};

export default function Page() {
  return (
    <>
      <Header />
      <BlogArticle />
       <CTASection/>
       <Footer/>
    </>
  );
}
