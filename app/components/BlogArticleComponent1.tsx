import { use } from "react";

// components/blog/BlogArticle.tsx

export default function BlogArticle() {
  return (
    <article className="space-y-12 text-[17px] leading-relaxed text-white/80 container pt-44 pb-12 mx-auto">

      <div className="mx-auto max-w-2xl px-6 space-y-16 leading-relaxed text-white/80 text-[17px]">
      {/* Section 1 */}
      <section className="space-y-4 ">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-white mb-10">Design is Not Decoration</h1>
        </header>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">
          People Don’t Read Websites — They Decide
          </h2>
      <div className="text-base space-y-2">
        <p>
          People don’t read websites. They scan. They judge. They decide.
        </p>

        <p>
          Within seconds, visitors answer three questions:
        </p>

        <ul className="space-y-2 pl-5">
          <li className="list-disc">Do I trust this brand?</li>
          <li className="list-disc">Do they understand my problem?</li>
          <li className="list-disc">Is this worth my time?</li>
        </ul>

        <p>
          If your website doesn’t answer those immediately, no animation or
          trendy layout will save it. Good design removes friction. Great
          design removes doubt.
        </p>
        </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Why “Pretty” Websites Fail
        </h2>

        <div className="text-base space-y-2">
        <p>
          A common mistake businesses make is confusing{" "}
          <span className="text-white">visual appeal</span> with{" "}
          <span className="text-white">clarity</span>.
        </p>

        <p>A beautiful site can still:</p>

        <ul className="space-y-2 pl-5">
          <li className="list-disc">Hide the value proposition</li>
          <li className="list-disc">Overwhelm users with options</li>
          <li className="list-disc">Fail to communicate credibility</li>
          <li className="list-disc">Convert at near-zero rates</li>
        </ul>

        <p>
          A premium website feels effortless because every element has a
          reason to exist. Nothing is accidental.
        </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          What High-Performing Websites Actually Do
        </h2>

         <div className="text-base space-y-2">
        <p>High-performing sites share a few traits:</p>

        <ul className="space-y-2 pl-5">
          <li className="list-disc">Clear positioning above the fold</li>
          <li className="list-disc">Strong visual hierarchy</li>
          <li className="list-disc">Intentional spacing and typography</li>
          <li className="list-disc">Focused calls to action</li>
          <li className="list-disc">Consistent brand language</li>
        </ul>

        <p>
          They don’t shout. They don’t beg. They{" "}
          <span className="text-white">guide</span>. That’s the difference
          between design and strategy.
        </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          When It’s Time to Redesign
        </h2>

        <div className="text-base space-y-2">
        <p>
          You don’t need a redesign because your site is “old” You need one
          when:
        </p>

        <ul className="space-y-2 pl-5">
          <li className="list-disc">Visitors don’t convert</li>
          <li className="list-disc">Messaging feels vague or generic</li>
          <li className="list-disc">Your brand has outgrown the current look</li>
          <li className="list-disc">
            You have to explain your business{" "}
           after people visit the site
          </li>
        </ul>

        <p>Your website should do the explaining for you.</p>
        </div>
      </section>
      </div>
    </article>
  );
}
