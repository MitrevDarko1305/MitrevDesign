import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CTASection from "@/app/components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How Much Should a Website Cost in 2026?, A Honest breakdown",
    description: "Website prices range from 0€ to 12.000€, and nobody explains why.Here is an honest breakdown of what you actually get at each price range.",
    
    openGraph: {
    title: "How Much Should a Website Cost in 2026? A Honest Breakdown",
    description: "Website prices range from 0€ to 12,000€ and nobody explains why. Here is an honest breakdown of what you actually get at each price range.",
    url: "https://mitrevdarko.dev/en/blog/website-cost-2026",
    type: "article",
    images: [{ url: "https://mitrevdarko.dev/Projects-Images/Blog-Images/Blog-Image-2.png", width: 1200, height: 630 }],
  },
};


export default function BlogArticleWebsiteCost() {
  return (
    <>
      <Header />
      <article className="space-y-8 text-[17px] bg-[#070815] leading-relaxed text-white/80 container pt-28 md:pt-32 pb-20 mx-auto">
        <div className="mx-auto max-w-2xl px-6 space-y-16 leading-normal text-white/60 text-[15px]">

          {/* Title */}
          <section className="space-y-2 text-center md:text-left">
            <header>
              <h1 className="text-3xl md:text-left text-center font-black text-white mb-6">
                How Much Should a Website Cost in 2026?
              </h1>
            </header>
            <div className="text-base space-y-6">
              <p>
                If you have ever searched for website pricing, you already know the problem. One agency quotes you 800€. Another sends a proposal for 12,000€. A friend tells you they built their site on Wix for free. And somehow all three of them are technically correct.
              </p>
              <p>
                Website pricing is confusing because the word "website" means completely different things depending on who you ask. A blog someone built over a weekend and a custom e-commerce platform for a national retailer are both websites. That is like asking how much a car costs and getting answers ranging from a used Fiat to a Mercedes S-Class.
              </p>
              <p>So let us break it down properly.</p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="space-y-2 text-center  md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              The Free and DIY Route — Wix, Squarespace, and Friends
            </h2>
            <p className="text-sm text-white/40 uppercase tracking-widest">Cost: 0€ to 30€ per month</p>
            <div className="text-base space-y-6">
              <p>
                These platforms exist and they work — for certain things. If you want to test an idea, share a portfolio, or put something online quickly without spending money, Wix and Squarespace are fine starting points.
              </p>
              <p>
                But there is a ceiling. The designs are template-based, which means your site looks like thousands of others. You are limited by what the platform allows. SEO control is restricted. And as your business grows, you will eventually hit walls that cannot be solved without starting over.
              </p>
              <p>
                Most serious business owners who started on Wix end up rebuilding within two years. The free site was not actually free — it cost them time, missed clients, and eventually a proper rebuild anyway.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-black mb-6 text-white">
              The Freelancer and Small Agency Range — 500€ to 3,000€
            </h2>
            <p className="text-sm text-white/40 uppercase tracking-widest">Cost: 500€ to 3,000€</p>
            <div className="text-base space-y-2">
              <p className="mb-6">
                This is where most small businesses actually belong. A skilled freelancer or small agency in this range can build you something clean, professional and tailored to your business — without the bloat and overhead of a large agency.
              </p>
              <p>At this level you get:</p>
              <ul className="space-y-1 pl-5 text-left">
                <li className="list-disc">A custom design that reflects your brand</li>
                <li className="list-disc">Pages built around your specific services</li>
                <li className="list-disc">Proper SEO foundations</li>
                <li className="list-disc">A site that actually loads fast and works on mobile</li>
                <li className="list-disc">Someone who understands your goals, not just your brief</li>
              </ul>
              <p className="mt-6">
                This is the sweet spot for local businesses, service providers, restaurants, coaches, consultants and anyone who needs a professional online presence without enterprise-level complexity. It is also where{" "}
               <br /> <span className="text-white">Mitrev Design</span> operates — because we believe most small businesses need a focused, well-built site more than they need an overengineered one.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              The Mid-Range Agency — 3,000€ to 10,000€
            </h2>
            <p className="text-sm text-white/40 uppercase tracking-widest">Cost: 3,000€ to 10,000€</p>
            <div className="text-base space-y-4">
              <p>
                At this level you are typically looking at larger projects — more pages, custom functionality, e-commerce, booking systems, multilingual setups or complex integrations. There is usually a team involved: a project manager, a designer, a developer, sometimes a copywriter.
              </p>
              <p>
                This makes sense when your business has grown to the point where your website needs to do a lot of heavy lifting. If you are a local service business with five core offerings, you do not need this. If you are running a growing e-commerce brand or a clinic with 20 practitioners, this range starts to make sense.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              The Large Agency — 10,000€ and Above
            </h2>
            <p className="text-sm text-white/40 uppercase tracking-widest">Cost: 10,000€+</p>
            <div className="text-base space-y-4">
              <p>
                Large agencies have large overheads. You are paying for account managers, strategy teams, brand consultants, senior developers and layers of process. Sometimes that is exactly what you need. For most small businesses, it is not.
              </p>
              <p>
                At this level you are typically a mid-to-large company with complex requirements, multiple stakeholders and a marketing team that needs custom tools built around their workflow. If that is not you, this budget is probably overkill.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              What Actually Affects the Price
            </h2>
            <div className="text-base space-y-2 text-start">
              <p className="mb-2">Beyond the who-builds-it question, here is what drives cost up or down:</p>
              <ul className="space-y-6 pl-5">
                <li className="list-disc"><span className="text-white">Number of pages</span> — A focused 5-page site costs less than a 20-page one. More pages means more design, more copy, more development time.</li>
                <li className="list-disc"><span className="text-white">Custom design vs template</span> — A fully custom design built around your brand takes more time than dropping your logo into a pre-made layout.</li>
                <li className="list-disc"><span className="text-white">Features and functionality</span> — A simple contact form is cheap. An online booking system with calendar integration and payment processing is not.</li>
                <li className="list-disc"><span className="text-white">Content</span> — Some agencies include copywriting. Others expect you to provide all the text.</li>
                <li className="list-disc"><span className="text-white">Ongoing support</span> — A one-time build is cheaper upfront. A monthly retainer costs more over time but saves you the stress of managing it yourself.</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              The Real Question is Not How Much — It is What Do You Actually Need
            </h2>
            <div className="text-base space-y-6">
              <p>
                Most small businesses need less than they think. A clean, fast, well-written 5-page website will outperform a bloated 15-page site built on a cheap template every single time.
              </p>
              <p>
                The goal is not the most pages or the most features. The goal is a site that clearly explains what you do, builds trust with visitors and makes it easy for them to contact you or buy from you.
              </p>
              <p>
                A focused website built with intention will always beat a large website built without one.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              Why Cheap Websites Are Often the Most Expensive
            </h2>
            <div className="text-base space-y-6">
              <p>
                Here is the part nobody talks about. A 300€ website that loses you one client per month is costing you thousands per year. A 1,500€ website that converts consistently pays for itself within weeks.
              </p>
              <p>
                The question is never really "how much does a website cost?" The real question is{" "}
                <span className="text-white">"how much is a bad website costing me?"</span>
              </p>
              <p>
                Investing in a properly built website is not an expense. It is the foundation of everything else you do online — your ads, your SEO, your social media. All of it leads back to your site. If the site does not convert, nothing else matters.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              Where Does Mitrev Design Fit In?
            </h2>
            <div className="text-base space-y-6">
              <p>
                We work with small businesses and service providers who want a professional website without paying agency prices for things they do not need. Our projects typically fall in the{" "}
                <span className="text-white">500€ to 1.999€ range</span> depending on scope — focused, well-built and delivered in 7 to 21 days.
              </p>
              <p>
                If you are not sure what you need or what it should cost for your specific situation, just reach out. We will give you a straight answer with no pressure and no jargon.
              </p>
            </div>
          </section>

        </div>
      </article>
      <CTASection compact />
      <Footer />
    </>
  );
}