"use client"

import BlogArticle from "@/app/components/BlogArticleComponent3";
import Header from "@/app/components/Header";
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