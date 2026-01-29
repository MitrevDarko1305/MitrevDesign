// components/blog/BlogArticleProcess.tsx

export default function BlogArticleProcess() {
  return (
    <article className="space-y-12 text-[17px] bg-[#070815] leading-relaxed text-white/80 container pt-44 pb-12 mx-auto">
      {/* Section 1 */}
      <div className="mx-auto max-w-2xl px-6 space-y-16 leading-relaxed text-white/80 text-[17px]">
      <section className="space-y-4">
         <header className="text-center">
          <h1 className="text-3xl font-bold text-white mb-10">What Actually Goes <br />Into High-Converting Website</h1>
        </header>

         <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-white">
          A Website Is a System, Not a Page
        </h2>

        <div className="text-base space-y-2">
        <p>
          A high-end website isn’t just a homepage with a nice layout.
          It’s a system designed to communicate, guide, and convert.
        </p>

        <p>
          Strategy, structure, content, and design all work together.
          Remove one, and the entire experience weakens.
        </p>

        <p>
          That’s why premium websites feel cohesive — every part supports
          the whole.
        </p>
        </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">

        <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-white">
          The Work Happens Before Design
        </h2>


        <div className="text-base space-y-2">
        <p>
          Most of the value in a website is created before a single pixel is
          designed.
        </p>

        <p>
          Understanding the business, the audience, and the goal comes first.
          Only then does layout, typography, and interaction make sense.
        </p>

        <p>
          Design isn’t guesswork. It’s the result of clear decisions.
        </p>
        </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">

        <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-white">
          Execution Is Where Quality Shows
        </h2>

        <div className="text-base space-y-2">
        <p>
          Details are what separate good websites from great ones.
        </p>

        <p>
          Spacing, responsiveness, performance, accessibility — these are the
          things users don’t consciously notice, but immediately feel.
        </p>

        <p>
          When everything works together seamlessly, the website becomes an
          asset — not a liability.
        </p>
        </div>
        </div>
      </section>
      </div>
    </article>
  );
}
