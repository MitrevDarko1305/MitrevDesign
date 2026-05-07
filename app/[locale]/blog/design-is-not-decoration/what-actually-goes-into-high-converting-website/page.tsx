import BlogArticle from "@/app/components/BlogArticleComponent3";
import Header from "@/app/components/Header";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "What Actually Goes Into a High Converting Website? | MitrevDesign",
  description: "Premium websites are not about visuals alone. They are systems built through strategy, structure and precise execution.",
  openGraph: {
    title: "What Actually Goes Into a High Converting Website?",
    description: "Premium websites are not about visuals alone. They are systems built through strategy, structure and precise execution.",
    url: "https://mitrevdarko.dev/blog/design-is-not-decoration/what-actually-goes-into-high-converting-website",
    type: "article",
    images: [{ url: "https://mitrevdarko.dev/Projects-Images/Concrete-blog-2.jpeg", width: 1200, height: 630 }],
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