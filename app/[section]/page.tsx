import { notFound } from "next/navigation";
import ParallaxSectionPage, { type ParallaxSectionItem } from "@/components/ui/parallax-section-page";
import { content, type PortfolioItem } from "@/lib/profile";

const landingSections = ["experience", "education", "publications", "certifications"] as const;
type LandingSection = (typeof landingSections)[number];

const visuals: Record<string, ParallaxSectionItem["image"]> = {
  "imco-business-systems-analyst": {
    src: "/brand/imco.png?v=2",
    alt: "IMCO logo",
    blend: true
  },
  "mec-tech-algorithm-engineer": {
    src: "/brand/mectech.png?v=2",
    alt: "MEC-Tech logo",
    blend: true
  },
  "nakama-brand-product-analyst": {
    src: "/brand/nakama.png",
    alt: "Nakama brand portfolio grid",
    fullBleed: true
  },
  "nissan-business-systems-analyst": {
    src: "/brand/nissan.svg",
    alt: "Nissan Motor Corporation logo"
  },
  "hgtech-international-business-analyst": {
    src: "/brand/hgtech.png?v=2",
    alt: "HGTECH logo",
    blend: true
  },
  "waterloo-management-sciences": {
    src: "/brand/waterloo.png",
    alt: "University of Waterloo logo",
    blend: true
  },
  "fudan-international-summer-session": {
    src: "/brand/fudan.jpg",
    alt: "Fudan University logo",
    fullBleed: true
  },
  "queens-computing": {
    src: "/brand/qu.jpg?v=2",
    alt: "Queen's University logo",
    fullBleed: true
  },
  "high-precision-air-temperature-control": {
    src: "/brand/sciencedirect.png?v=2",
    alt: "ScienceDirect logo",
    blend: true
  },
  "scd-stacked-carton-dataset": {
    src: "/brand/mdpi.png?v=2",
    alt: "MDPI logo",
    blend: true
  }
};

type SectionLandingProps = {
  params: Promise<{
    section: string;
  }>;
};

export function generateStaticParams() {
  return landingSections.map((section) => ({ section }));
}

export async function generateMetadata({ params }: SectionLandingProps) {
  const { section } = await params;
  if (!isLandingSection(section)) {
    return {};
  }

  const sectionData = content.en.sections[section];

  return {
    title: `${sectionData.eyebrow} | Chloe Li`,
    description: sectionData.title
  };
}

export default async function SectionLanding({ params }: SectionLandingProps) {
  const { section } = await params;

  if (!isLandingSection(section)) {
    notFound();
  }

  const sectionData = content.en.sections[section];
  const items = (sectionData.items as PortfolioItem[]).map((item) => ({
    slug: item.slug,
    title: item.title,
    subtitle: item.subtitle,
    meta: item.meta,
    description: item.description,
    tags: item.tags,
    image: visuals[item.slug] ?? {
      src: item.previewImage ?? "/linkedin-preview.jpg",
      alt: `${item.title} preview`,
      fullBleed: Boolean(item.previewImage)
    }
  }));

  return (
    <ParallaxSectionPage
      eyebrow={sectionData.eyebrow}
      items={items}
      section={sectionData.eyebrow}
      title={sectionData.title}
    />
  );
}

function isLandingSection(section: string): section is LandingSection {
  return (landingSections as readonly string[]).includes(section);
}
