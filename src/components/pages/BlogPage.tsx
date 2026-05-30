import Link from "next/link";

import type { MarketingPage } from "@/content/types";

type BlogPageProps = {
  page: MarketingPage;
};

const filters = ["All", "Insights", "Company", "Product"];

export function BlogPage({ page }: BlogPageProps) {
  const posts = page.entries ?? page.sections[0]?.items ?? [];

  return (
    <section className="min-h-screen bg-white pb-20 pt-24 text-black">
      <div className="container">
        <div className="relative overflow-hidden rounded-lg bg-white py-8">
          <div className="absolute right-0 top-0 h-56 w-80 rotate-12 border border-zinc-200" aria-hidden="true" />
          <h1 className="text-4xl font-semibold tracking-normal text-black md:text-5xl">
            {page.title}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">{page.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-zinc-500">Filter by:</span>
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={
                  index === 0
                    ? "rounded-full bg-zinc-900 px-3 py-1 text-white"
                    : "rounded-full border border-zinc-200 px-3 py-1 text-zinc-500"
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <Link key={post.title} href={post.href ?? "/blog"} className="group block">
              <article>
                <div className="relative h-56 overflow-hidden rounded-lg bg-zinc-100">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(135deg,#c7783e,#f0c9a1)"
                          : index === 1
                            ? "linear-gradient(135deg,#d8d8d8,#797d86)"
                            : "linear-gradient(135deg,#111827,#f4f4f5)",
                    }}
                  />
                  <div className="absolute left-4 top-4 text-lg font-black italic text-white">
                    gpt.wrapper
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 rounded bg-white/75 p-3 text-xs text-zinc-700 backdrop-blur">
                    {post.meta ?? "Wrapper field note"}
                  </div>
                </div>
                <h2 className="mt-4 text-base font-semibold leading-5 text-black group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{post.description}</p>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {posts.slice(3).map((post) => (
            <Link key={post.title} href={post.href ?? "/blog"} className="group block border-t border-zinc-200 pt-5">
              <p className="text-xs font-medium text-zinc-500">{post.meta ?? "Notes"}</p>
              <h2 className="mt-3 text-xl font-semibold leading-6 text-black group-hover:underline">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
