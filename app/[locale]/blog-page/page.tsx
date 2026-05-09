import React from "react";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CTASection from "@/app/components/CTASection";

type Post = {
  typeLabel: string;
  title: string;
  excerpt: string;
  href: string;
  coverImageUrl: string;
  coverImageAlt?: string;
  authorName: string;
  authorAvatarUrl: string;
  dateLabel: string;
  dateTime: string;
  readTime: string;
};

const ALL_POSTS: Post[] = [
 {
  typeLabel: "Article",
  title: "Why Your Business Needs a Website in 2026",
  excerpt: "Instagram feels like enough — until it's not, Here is why your website is your most important business asset.",
  href: "/blog/website-vs-instagram",
  coverImageUrl: "/Projects-Images/Blog-Images/Blog-Image-1.png",
  authorName: "Darko Mitrev",
  authorAvatarUrl: "/Projects-Images/Darko-team.webp",
  dateLabel: "May 09, 2026",
  dateTime: "2026-05-09",
  readTime: "8 min read",
}
];

function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-sm shadow-lg hover:translate-y-[-2px] duration-300">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={post.coverImageUrl}
          alt={post.coverImageAlt ?? post.title}
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white/70 p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">{post.typeLabel}</p>
          <Link href={post.href} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-sm text-gray-500">{post.excerpt}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src={post.authorAvatarUrl}
            alt={post.authorName}
            loading="lazy"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">{post.authorName}</p>
            <div className="flex space-x-1 text-sm text-gray-400">
              <time dateTime={post.dateTime}>{post.dateLabel}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <main>
      <Header />
      <section className="relative bg-amber-100  px-6 pt-32 pb-20 lg:px-8">

        <div className="mx-auto max-w-6xl text-center mb-16">
          <h1 className="mt-3 text-5xl font-black tracking-tight text-gray-900">
            Web & Design Insights
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
            Honest takes on web design, UX and the things that make or break a website
          </p>
        </div>

        {ALL_POSTS.length > 0 ? (
          <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-3">
            {ALL_POSTS.map((post) => (
              <PostCard key={`${post.title}-${post.dateTime}`} post={post} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-6xl text-center py-20">
            <p className="text-gray-400 text-sm">More articles coming soon.</p>
          </div>
        )}

        <div className="mx-auto max-w-6xl mt-12">
          <Link
            href="/#blog-posts"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            ← Back to home
          </Link>
        </div>

      </section>
      <CTASection compact/>
      <Footer />
    </main>
  );
}