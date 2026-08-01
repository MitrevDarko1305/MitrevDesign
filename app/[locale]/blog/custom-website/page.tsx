import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CTASection from "@/app/components/CTASection";
import { Metadata } from "next";
import Link from "next/link";
import AuditSignup from "@/app/components/AuditSignup";

export const metadata: Metadata = {
    title: "How Long Does a Custom Website Actually Take to Build? | Darko Mitrev",
    description: "Everyone assumes a real website takes months. Here's what actually happened when i build one and timed it.",

    openGraph: {
        title: "How Long Does a Custom Website Actually Take to Build?",
        description: "Everyone assumes a real website takes months. Here's what actually happened when i build one and timed it.",
        url: "https://mitrevdarko.dev/en/blog/custom-website",
        type: "article",
        images: [{ url: "https://mitrevdarko.dev/Projects-Images/Blog-Images/Blog-Post-3.png", width: 1200, height: 630 }],
    },
}


export default function BlogArticleWebsiteTimeline() {
  return (
    <>
      <Header />
      <article className="space-y-6 text-[17px] bg-[#070815] leading-relaxed text-white/80 container pt-28 md:pt-32 pb-28 mx-auto">
        <div className="mx-auto max-w-2xl px-6 space-y-16 leading-normal text-white/60 text-[15px]">

          {/* Title */}
          <section className="space-y-2 text-center md:text-left">
            <header>
              <h1 className="text-3xl md:text-left text-center font-black text-white mb-6">
                How Long Does a Custom Website Actually Take to Build?
              </h1>
            </header>
            <div className="text-base space-y-6">
              <p>
                Ask most business owners how long a custom website takes, and you will hear "a few months" without hesitation. It is one of the most common assumptions in web design — and it is wrong often enough that it quietly talks people out of getting a site that actually represents their business well.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              The Case Study — Vardar Estates
            </h2>
            <div className="text-base space-y-6">
              <p>
                To put the timeline question to the test, I built a complete real estate platform from scratch —{" "},
                 <Link href="https://vardar-estates.mitrevdarko.dev" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
                  Vardar Estates
                 </Link> a functional luxury real-estate agency website. It is not a stripped-down landing page. It includes live property listings with filtering by city and status, an interactive map, dynamic property detail pages, full bilingual support, team profiles, and a 100 Lighthouse performance score.
                All of it, built and live in days, not weeks.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              Why It Was Fast — Without Cutting Corners
            </h2>
            <div className="text-base space-y-2 text-start">
              <p className="mb-6">The honest answer is not really "That i worked around the clock", Speed and quality are easily achievable when the right system is in place:</p>
              <ul className="space-y-6 pl-5">
                <li className="list-disc"><span className="text-white font-bold">Real code, not page builders</span> — No drag-and-drop tools fighting the design, no bloated plugin stacks slowing the site down. Built directly with modern frameworks like react components to speed up the process and development.</li>
                <li className="list-disc"><span className="text-white font-bold">Reusable systems, not starting from zero</span> — Multilingual support, image optimization, SEO metadata — these are not reinvented per project. They are patterns already solved and refined across past builds.</li>
                <li className="list-disc"><span className="text-white font-bold">No unnecessary back-and-forth</span> — A lot of "months-long" timelines are not actually build time. They are weeks lost to unclear scope, sloopy work  and  slow revisions. Cut that out, and the real build time is much shorter than people expect.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              The Myth That Costs Small Businesses the Most
            </h2>
            <div className="text-base space-y-6">
              <p>
                "Custom" got a reputation for being slow and expensive, so a lot of small businesses settle for a generic template instead — something that looks like every other site in their industry, and does not do much to earn a visitor's trust.
              </p>
              <p>
                It does not have to be a trade-off. A site can be genuinely custom — built for your business, your content, your customers — without taking months or costing what people assume it will.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl mb-6 font-black text-white">
              Where Does Mitrev Design Fit In?
            </h2>
            <div className="text-base space-y-6">
              <p>
                We build focused, custom websites without the drawn-out timelines usually associated with "custom." If you have been putting off getting a proper website because it felt like too big a commitment, that assumption might be exactly what is costing you the most.
              </p>
              <p>
               Want to see what that actually looks like?{" "}
               <Link href="https://vardar-estates.mitrevdarko.dev" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">
                 Check out vardar estates 
               </Link>
                , or reach out and we will give you a real timeline for your specific project, no estimates and lost time.
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