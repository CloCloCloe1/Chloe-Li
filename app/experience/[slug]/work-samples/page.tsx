import { notFound } from "next/navigation";
import ParallaxSectionPage, { type ParallaxSectionItem } from "@/components/ui/parallax-section-page";
import { getSectionItem } from "@/lib/profile";

type WorkSamplesPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [{ slug: "nakama-brand-product-analyst" }];
}

export async function generateMetadata({ params }: WorkSamplesPageProps) {
  const { slug } = await params;
  const item = getSectionItem("experience", slug, "en");

  return {
    title: item ? `${item.subtitle} Work Samples | Chloe Li` : "Work Samples | Chloe Li",
    description: item?.description ?? "Selected portfolio work samples."
  };
}

export default async function WorkSamplesPage({ params }: WorkSamplesPageProps) {
  const { slug } = await params;
  const item = getSectionItem("experience", slug, "en");

  if (!item?.workSamples?.length) {
    notFound();
  }

  const samples: ParallaxSectionItem[] = item.workSamples.map((sample) => ({
    slug: sample.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    title: sample.title,
    subtitle: sample.label,
    meta: `${item.subtitle} / ${item.title}`,
    description: "A sanitized work sample showing the business problem, the workflow I built, and the decision support outcome.",
    bullets: [
      `Problem: ${sample.problem}`,
      `Solution: ${sample.solution}`,
      `Outcome: ${sample.outcome}`
    ],
    tags: sample.tags,
    url: sample.url,
    cta: "Open Sample",
    image: {
      src: sample.image,
      alt: `${sample.title} sample preview`,
      fullBleed: sample.image.endsWith(".png")
    }
  }));

  return (
    <ParallaxSectionPage
      eyebrow="Work Samples"
      items={samples}
      section="Nakama Work Samples"
      sectionKey="work-samples"
      title="Selected examples of product websites, label workflows, brand analysis, planning views, and event poster design."
    />
  );
}
