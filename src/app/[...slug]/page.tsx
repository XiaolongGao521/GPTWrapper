import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPage } from "@/components/pages/BlogPage";
import { LegalPage } from "@/components/pages/LegalPage";
import { PricingPage } from "@/components/pages/PricingPage";
import { ResourcesPage } from "@/components/pages/ResourcesPage";
import { SimpleMarketingPage } from "@/components/pages/SimpleMarketingPage";
import { getAllPageSlugs, getPageBySlug } from "@/content/pages";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return getAllPageSlugs().map((slug) => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug.join("/"));

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.subtitle,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug.join("/"));

  if (!page) {
    notFound();
  }

  switch (page.template) {
    case "pricing":
      return <PricingPage page={page} />;
    case "resources":
      return <ResourcesPage page={page} />;
    case "blog":
      return <BlogPage page={page} />;
    case "legal":
      return <LegalPage page={page} />;
    default:
      return <SimpleMarketingPage page={page} />;
  }
}
