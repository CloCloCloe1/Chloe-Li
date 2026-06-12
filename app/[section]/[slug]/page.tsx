import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content, getAllDetailPaths, getSectionItem } from "@/lib/profile";

const sections = ["experience", "education", "publications", "certifications"] as const;
type DetailSectionKey = (typeof sections)[number];

const brandVisuals: Record<string, { src: string; backgroundColor: string; blend?: boolean; fullBleed?: boolean; imageClassName?: string }> = {
  "nakama-brand-product-analyst": {
    src: "/brand/nakama.png",
    backgroundColor: "#eef7ef",
    fullBleed: true,
    imageClassName: "object-cover"
  },
  "mec-tech-algorithm-engineer": {
    src: "/brand/mectech.png?v=2",
    backgroundColor: "#edf4ff",
    blend: true,
    imageClassName: "max-h-44"
  },
  "imco-business-systems-analyst": {
    src: "/brand/imco.png?v=2",
    backgroundColor: "#eef9fb",
    blend: true,
    imageClassName: "max-h-48"
  },
  "nissan-business-systems-analyst": {
    src: "/brand/nissan.svg",
    backgroundColor: "#f5f5f7",
    imageClassName: "max-h-36"
  },
  "hgtech-international-business-analyst": {
    src: "/brand/hgtech.png?v=2",
    backgroundColor: "#fff5f5",
    blend: true,
    imageClassName: "max-h-40"
  },
  "waterloo-management-sciences": {
    src: "/brand/waterloo.png",
    backgroundColor: "#f5f5f7",
    blend: true,
    imageClassName: "max-h-44"
  },
  "queens-computing": {
    src: "/brand/qu.jpg?v=2",
    backgroundColor: "#f4f4f4",
    fullBleed: true,
    imageClassName: "object-cover"
  },
  "high-precision-air-temperature-control": {
    src: "/brand/sciencedirect.png?v=2",
    backgroundColor: "#fff6f1",
    blend: true,
    imageClassName: "max-h-40"
  },
  "scd-stacked-carton-dataset": {
    src: "/brand/mdpi.png?v=2",
    backgroundColor: "#f2f7fc",
    blend: true,
    imageClassName: "max-h-40"
  }
};

type DetailPageProps = {
  params: Promise<{
    section: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllDetailPaths();
}

export async function generateMetadata({ params }: DetailPageProps) {
  const { section, slug } = await params;
  if (!isSectionKey(section)) {
    return {};
  }

  const item = getSectionItem(section, slug, "en");

  return {
    title: item ? `${item.title} | Chloe Li` : "Chloe Li"
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { section, slug } = await params;
  if (!isSectionKey(section)) {
    notFound();
  }

  const item = getSectionItem(section, slug, "en");
  const sectionLabel = content.en.nav[section];
  const sectionHref = `/#${section}`;

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-14 text-neutral-950">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <nav className="section-shell flex h-14 items-center justify-between">
          <Link className="text-sm font-semibold text-neutral-950 focus-ring" href="/">
            Chloe Li
          </Link>
          <Link className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-800 transition hover:bg-neutral-200 focus-ring" href={sectionHref}>
            <ArrowLeft size={14} />
            {sectionLabel}
          </Link>
        </nav>
      </header>

      <section className="section-shell py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-[#0066cc]">{sectionLabel}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-normal text-neutral-950 sm:text-6xl">
              {item.title}
            </h1>
            <p className="mt-5 text-xl font-medium leading-8 text-neutral-700">{item.subtitle}</p>
            <p className="mt-3 text-sm font-semibold text-neutral-500">{item.meta}</p>
            {item.description ? <p className="mt-8 text-lg leading-8 text-neutral-700">{item.description}</p> : null}

            {item.url ? (
              <a
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0066cc] px-6 text-sm font-semibold text-white transition hover:bg-[#0057b8] focus-ring"
                href={item.url}
                rel="noreferrer"
                target="_blank"
              >
                {item.cta ?? "Open link"}
                <ArrowUpRight size={16} />
              </a>
            ) : null}
            {item.attachments?.length ? (
              <div className="mt-4 flex flex-wrap gap-3">
                {item.attachments.map((attachment) => (
                  <a
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/12 bg-white px-6 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 focus-ring"
                    href={attachment.url}
                    key={attachment.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {attachment.label}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-neutral-100 shadow-sm">
            <DetailVisual item={item} slug={slug} />
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] bg-neutral-100 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-normal text-neutral-950">Details</h2>
            <ul className="mt-6 grid gap-4">
              {item.bullets?.map((bullet) => (
                <li className="flex gap-3 text-sm leading-7 text-neutral-700" key={bullet}>
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-normal text-neutral-950">Focus</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags?.map((tag) => (
                <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-700" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>

        {item.workSamples?.length ? (
          <section className="mt-14">
            <p className="text-sm font-semibold text-[#0066cc]">Selected work samples</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-neutral-950 sm:text-4xl">
              Sanitized examples of product and business problems translated into usable workflows.
            </h2>
            <div className="mt-8 grid gap-6">
              {item.workSamples.map((sample) => (
                <article
                  className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm lg:grid lg:grid-cols-[1.05fr_0.95fr]"
                  key={sample.title}
                >
                  <SampleImage sample={sample} />
                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-semibold text-[#0066cc]">{sample.label}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-normal text-neutral-950">{sample.title}</h3>
                    <div className="mt-6 grid gap-5">
                      <SamplePoint label="Problem" text={sample.problem} />
                      <SamplePoint label="Solution" text={sample.solution} />
                      <SamplePoint label="Outcome" text={sample.outcome} />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {sample.tags.map((tag) => (
                        <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-700" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {sample.url ? (
                      <a
                        className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0066cc] px-5 text-sm font-semibold text-white transition hover:bg-[#0057b8] focus-ring"
                        href={sample.url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        View sample
                        <ArrowUpRight size={16} />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </section>
    </main>
  );
}

function SampleImage({
  sample
}: {
  sample: {
    title: string;
    image: string;
    url?: string;
  };
}) {
  const image = (
    <Image
      alt={`${sample.title} sanitized preview`}
      className="object-cover transition duration-300 group-hover:scale-[1.02]"
      fill
      sizes="(min-width: 1024px) 52vw, 100vw"
      src={sample.image}
    />
  );

  if (!sample.url) {
    return <div className="relative min-h-[260px] overflow-hidden bg-neutral-100 sm:min-h-[340px]">{image}</div>;
  }

  return (
    <a
      aria-label={`Open ${sample.title} sample`}
      className="group relative block min-h-[260px] overflow-hidden bg-neutral-100 focus-ring sm:min-h-[340px]"
      href={sample.url}
      rel="noreferrer"
      target="_blank"
    >
      {image}
      <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-neutral-900 shadow-sm backdrop-blur">
        Open sample
        <ArrowUpRight size={14} />
      </span>
    </a>
  );
}

function SamplePoint({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">{label}</p>
      <p className="mt-2 text-sm leading-7 text-neutral-700">{text}</p>
    </div>
  );
}

function isSectionKey(section: string): section is DetailSectionKey {
  return (sections as readonly string[]).includes(section);
}

function DetailVisual({ item, slug }: { item: { title: string; attachments?: { label: string; url: string }[] }; slug: string }) {
  const brandVisual = brandVisuals[slug];

  if (!brandVisual) {
    const pdf = item.attachments?.[0];

    if (pdf) {
      return (
        <div className="relative min-h-80 overflow-hidden bg-[#f5f5f7]">
          <iframe
            aria-label={`${item.title} certificate PDF preview`}
            className="h-96 w-full border-0 bg-white"
            src={`${pdf.url}#toolbar=0&navpanes=0&scrollbar=0&page=1&view=FitH`}
            title={`${item.title} certificate preview`}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 to-white/0 p-6">
            <p className="text-sm font-semibold text-[#0066cc]">LinkedIn Learning certificate</p>
            <p className="mt-2 text-2xl font-semibold tracking-normal text-neutral-950">{item.title}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex min-h-80 items-center justify-center overflow-hidden bg-[#f5f5f7] p-10">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#0066cc]">LinkedIn Learning</p>
          <p className="mt-3 text-5xl font-semibold tracking-normal text-neutral-950">Certificate</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex min-h-80 items-center justify-center overflow-hidden bg-neutral-100 p-10"
      style={{ backgroundColor: brandVisual.backgroundColor }}
    >
      {brandVisual?.fullBleed ? (
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${brandVisual.src}')` }}
        />
      ) : brandVisual ? (
        <Image
          alt=""
          className={`w-[78%] object-contain ${brandVisual.blend ? "mix-blend-multiply" : ""} ${brandVisual.imageClassName ?? ""}`}
          height={260}
          src={brandVisual.src}
          width={760}
        />
      ) : null}
    </div>
  );
}
