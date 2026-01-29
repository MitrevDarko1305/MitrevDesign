import React from "react";
import Link from "next/link";

type Post = {
  typeLabel: string; // Article / Video / Case Study
  typeHref?: string;

  title: string;
  excerpt: string;
  href?: string;

  coverImageUrl: string;
  coverImageAlt?: string;

  authorName: string;
  authorHref?: string;
  authorAvatarUrl: string;

  dateLabel: string; // "Mar 16, 2020"
  dateTime: string; // "2020-03-16"
  readTime: string; // "6 min read"
};

const DEFAULT_POSTS: Post[] = [
  {
    typeLabel: "Article",
    typeHref: "#",
    title: "Your Website is Either Selling  or Costing you Money",
    excerpt:
      "Your website is not just a visual asset. Its a decision making tool - and most sites quietly lose opportunities without anyone noticing",
    href: "/blog/design-is-not-decoration",
    coverImageUrl:
       "/Projects-Images/Desk-Home-2.jpg",
    coverImageAlt: "",
    authorName: "Mitrev Darko",
    authorHref: "#",
    authorAvatarUrl:
      "/Projects-Images/Darko-team.webp",
    dateLabel: "Jan 28, 2026",
    dateTime: "2026-01-28",
    readTime: "5 min read",
  },
  {
    typeLabel: "Article",
    typeHref: "#",
    title: "Clarity is the Foundation of High Performing  Design",
    excerpt:
      "Creativity gets attention, but clarity earns trust. This is why the best websites feel obvious and convert better.",
    href:"/blog/design-is-not-decoration/clarity-is-the-foundation-of-high-performing-design",
    coverImageUrl:
      "/Projects-Images/Concrete-blog.webp",
    coverImageAlt: "",
    authorName: "Mike Tretyak",
    authorHref: "#",
    authorAvatarUrl:
      "/Projects-Images/Mike-team.jpg",
    dateLabel: "Dec 10, 2025",
    dateTime: "2025-12-10",
    readTime: "4 min read",
  },
  {
    typeLabel: "Article",
    typeHref: "#",
    title: "What Actually Goes Into a High Converting Website?",
    excerpt:
      "Premium websites are not about visuals alone. They are systems built through strategy structure and precise execution.",
    href: "/blog/design-is-not-decoration/what-actually-goes-into-high-converting-website",
    coverImageUrl:
      "/Projects-Images/Concrete-blog-2.jpeg",
    coverImageAlt: "",
    authorName: "Darko Mitrev",
    authorHref: "#",
    authorAvatarUrl:
      "/Projects-Images/Darko-team.webp",
    dateLabel: "Jan 05, 2026",
    dateTime: "2026-01-05",
    readTime: "8 min read",
  },
];

function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:translate-y-[-2px] duration-300">
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
          <p className="text-sm font-medium text-indigo-600">
            <a href={post.typeHref ?? "#"} className="hover:underline">
              {post.typeLabel}
            </a>
          </p>

          <Link href={post.href ?? "#"} target="_blank" className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-sm text-gray-500">{post.excerpt}</p>
         </Link>
        </div>

        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            
              <span className="sr-only">{post.authorName}</span>
              <img
                className="h-10 w-10 rounded-full"
                src={post.authorAvatarUrl}
                alt={post.authorName}
                loading="lazy"
              />
           
          </div>

          <div className="ml-3">
            <p className="text-sm font-medium text-gray-800">
             
                {post.authorName}
             
            </p>

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

export type ColumnPostsProps = {
  title?: string;
  subtitle?: string;
  posts?: Post[];
  className?: string;
};

export default function ColumnPosts({
  title = "Design that works",
  subtitle = "Practical insights on clarity, UX, and high performing websites",
  posts = DEFAULT_POSTS,
  className = "",
}: ColumnPostsProps) {
  return (
    <section className={`relative bg-amber-100 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28 ${className}`}>
      <div className="absolute inset-0" aria-hidden="true">
        <div className="h-1/3  sm:h-2/3" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500 sm:mt-4">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={`${post.title}-${post.dateTime}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
