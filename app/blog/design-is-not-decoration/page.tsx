"use client";

import Header from "../../components/Header";
import BlogArticle from "../../components/BlogArticleComponent1";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";

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
