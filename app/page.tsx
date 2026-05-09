"use client";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Workflow
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { contact, content, type Locale, type PortfolioItem, type SectionKey } from "@/lib/profile";

const sectionIds = ["home", "about", "experience", "education", "publications", "contact"] as const;
const detailSections: SectionKey[] = ["experience", "education", "publications"];

const imagePositions: Record<string, string> = {
  "mec-tech-algorithm-engineer": "0% 0%",
  "imco-business-systems-analyst": "33.333% 0%",
  "nissan-business-systems-analyst": "66.666% 0%",
  "hgtech-international-business-analyst": "100% 0%",
  "ai-workflow-knowledge-base": "0% 50%",
  "product-data-validation": "33.333% 50%",
  "reporting-dashboards": "66.666% 50%",
  "waterloo-management-sciences": "100% 50%",
  "queens-computing": "0% 100%",
  "high-precision-air-temperature-control": "33.333% 100%",
  "scd-stacked-carton-dataset": "66.666% 100%"
};

const brandVisuals: Record<string, { src: string; backgroundColor: string; blend?: boolean; imageClassName?: string }> = {
  "mec-tech-algorithm-engineer": {
    src: "/brand/mec-tech.png",
    backgroundColor: "#edf4ff",
    imageClassName: "max-h-24"
  },
  "imco-business-systems-analyst": {
    src: "/brand/imco.svg",
    backgroundColor: "#eef9fb",
    imageClassName: "max-h-28"
  },
  "nissan-business-systems-analyst": {
    src: "/brand/nissan.svg",
    backgroundColor: "#f5f5f7",
    imageClassName: "max-h-20"
  },
  "hgtech-international-business-analyst": {
    src: "/brand/hgtech.svg",
    backgroundColor: "#fff5f5",
    imageClassName: "max-h-24"
  },
  "waterloo-management-sciences": {
    src: "/brand/waterloo.png",
    backgroundColor: "#f5f5f7",
    blend: true,
    imageClassName: "max-h-24"
  },
  "queens-computing": {
    src: "/brand/queens.jpg",
    backgroundColor: "#f8f1f4",
    blend: true,
    imageClassName: "max-h-24"
  },
  "high-precision-air-temperature-control": {
    src: "/brand/sciencedirect.svg",
    backgroundColor: "#fff6f1",
    imageClassName: "max-h-24"
  },
  "scd-stacked-carton-dataset": {
    src: "/brand/mdpi.svg",
    backgroundColor: "#f2f7fc",
    imageClassName: "max-h-24"
  }
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = content[locale];
  const oppositeLocale = locale === "en" ? "zh" : "en";
  const nav = useMemo(
    () => sectionIds.map((id) => ({ id, label: t.nav[id] })),
    [t.nav]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-white pt-[6.5rem] text-neutral-950 md:pt-14">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <nav className="section-shell flex h-14 items-center justify-between">
          <a className="text-sm font-semibold tracking-normal text-neutral-950 focus-ring" href="#home">
            {t.displayName}
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {nav.map((item) => (
              <a
                className="text-xs font-medium text-neutral-600 transition hover:text-neutral-950 focus-ring"
                href={`#${item.id}`}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            aria-label="Toggle language"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-800 transition hover:border-black/20 hover:bg-neutral-100 focus-ring"
            onClick={() => setLocale(oppositeLocale)}
            type="button"
          >
            <Globe2 size={14} />
            {locale === "en" ? "中文" : "EN"}
          </button>
        </nav>
        <div className="border-t border-black/5 md:hidden">
          <div className="flex gap-5 overflow-x-auto px-5 py-3">
            {nav.map((item) => (
              <a
                className="shrink-0 text-xs font-medium text-neutral-600 transition hover:text-neutral-950 focus-ring"
                href={`#${item.id}`}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="page-section section-shell flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-20 text-center" id="home">
        <p className="animate-rise text-2xl font-semibold tracking-normal text-neutral-950 sm:text-3xl">
          {t.displayName}
        </p>
        <p className="mt-5 animate-rise text-sm font-semibold text-[#0066cc]">{t.hero.eyebrow}</p>
        <h1 className="mx-auto mt-5 max-w-5xl animate-rise text-5xl font-semibold leading-[1.05] tracking-normal text-neutral-950 sm:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl animate-rise text-lg leading-8 text-neutral-600 sm:text-xl">
          {t.hero.summary}
        </p>

        <div className="mt-9 flex animate-rise flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0066cc] px-6 text-sm font-semibold text-white transition hover:bg-[#0057b8] focus-ring"
            href="#experience"
          >
            {t.hero.primaryCta}
            <ArrowRight size={16} />
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-black/12 bg-white px-6 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 focus-ring"
            href={contact.resumeUrl}
          >
            <Download size={16} />
            {t.hero.secondaryCta}
          </a>
        </div>

        <div className="mx-auto mt-16 grid w-full max-w-4xl gap-3 sm:grid-cols-3">
          {t.metrics.map((metric) => (
            <div className="rounded-3xl bg-neutral-100 px-6 py-7" key={metric.label}>
              <p className="text-4xl font-semibold tracking-normal text-neutral-950">{metric.value}</p>
              <p className="mt-2 text-sm leading-5 text-neutral-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section bg-neutral-100 py-24" id="about">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionIntro eyebrow={t.about.eyebrow} title={t.about.title} />
          <div>
            <p className="text-xl leading-9 text-neutral-700">{t.about.body}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.about.focus.map((item) => (
                <div className="flex items-start gap-3 rounded-3xl bg-white p-5 shadow-sm" key={item}>
                  <Check className="mt-0.5 shrink-0 text-[#0066cc]" size={18} />
                  <p className="text-sm font-medium leading-6 text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {detailSections.map((section, index) => (
        <LineupSection
          background={index % 2 === 0 ? "white" : "gray"}
          key={section}
          locale={locale}
          section={section}
        />
      ))}

      <section className="page-section py-24" id="contact">
        <div className="section-shell text-center">
          <p className="text-sm font-semibold text-[#0066cc]">{t.contact.eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-neutral-950 sm:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{t.contact.body}</p>

          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ContactItem href={`mailto:${contact.email}`} icon={<Mail size={18} />} label={contact.email} />
            <ContactItem href={`tel:${contact.phone}`} icon={<Phone size={18} />} label={contact.phone} />
            <ContactItem href={contact.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" />
            <ContactItem href="#contact" icon={<MapPin size={18} />} label={contact.location} />
          </div>

          <a
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#0066cc] px-6 text-sm font-semibold text-white transition hover:bg-[#0057b8] focus-ring"
            href={`mailto:${contact.email}`}
          >
            {t.contact.emailCta}
          </a>
        </div>
      </section>

      <footer className="border-t border-black/10 py-8">
        <div className="section-shell flex flex-col justify-between gap-3 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {t.displayName}. All rights reserved.</p>
          <p>Business Analyst · Product Analyst · Data Analyst</p>
        </div>
      </footer>
    </main>
  );
}

function LineupSection({
  section,
  locale,
  background
}: {
  section: SectionKey;
  locale: Locale;
  background: "white" | "gray";
}) {
  const sectionData = content[locale].sections[section];
  const bgClass = background === "gray" ? "bg-neutral-100" : "bg-white";

  return (
    <section className={`page-section py-24 ${bgClass}`} id={section}>
      <div className="section-shell">
        <SectionIntro eyebrow={sectionData.eyebrow} title={sectionData.title} />
        <p className="mt-10 text-2xl font-semibold tracking-normal text-neutral-950 sm:text-3xl">
          {sectionData.lineup}
        </p>
        <div className={`mt-6 grid gap-5 ${section === "experience" ? "lg:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {sectionData.items.map((item, index) => (
            <PortfolioCard item={item} key={item.slug} section={section} visualIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  section,
  visualIndex
}: {
  item: PortfolioItem;
  section: SectionKey;
  visualIndex: number;
}) {
  return (
    <Link
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-ring"
      href={`/${section}/${item.slug}`}
    >
      <VisualTile section={section} index={visualIndex} slug={item.slug} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm font-semibold text-[#0066cc]">{item.meta}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-normal text-neutral-950">{item.title}</h3>
        <p className="mt-2 text-sm font-medium text-neutral-600">{item.subtitle}</p>
        {item.description ? <p className="mt-5 text-sm leading-7 text-neutral-700">{item.description}</p> : null}
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0066cc]">
          <span>Learn more</span>
          <ArrowRight className="transition group-hover:translate-x-1" size={16} />
        </div>
      </div>
    </Link>
  );
}

function VisualTile({ section, index, slug }: { section: SectionKey; index: number; slug: string }) {
  const brandVisual = brandVisuals[slug];
  const icons = {
    experience: <BriefcaseBusiness size={28} />,
    projects: index === 0 ? <Workflow size={28} /> : <BarChart3 size={28} />,
    education: <GraduationCap size={28} />,
    publications: <FileText size={28} />
  };

  return (
    <div
      className="relative flex h-44 items-center justify-center overflow-hidden bg-neutral-100"
      style={
        brandVisual
          ? { backgroundColor: brandVisual.backgroundColor }
          : {
              backgroundImage: "url('/portfolio-card-atlas.png')",
              backgroundPosition: imagePositions[slug] ?? `${(index % 4) * 33.333}% ${Math.floor(index / 4) * 50}%`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "400% 300%"
            }
      }
    >
      {brandVisual ? (
        <Image
          alt=""
          className={`w-[78%] object-contain ${brandVisual.blend ? "mix-blend-multiply" : ""} ${brandVisual.imageClassName ?? ""}`}
          height={220}
          src={brandVisual.src}
          width={640}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-white/10" />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-950/90 text-white shadow-sm backdrop-blur">
            {icons[section]}
          </div>
        </>
      )}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  inverted = false
}: {
  eyebrow: string;
  title: string;
  inverted?: boolean;
}) {
  return (
    <div>
      <p className={`text-sm font-semibold ${inverted ? "text-white/50" : "text-[#0066cc]"}`}>{eyebrow}</p>
      <h2 className={`mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl ${inverted ? "text-white" : "text-neutral-950"}`}>
        {title}
      </h2>
    </div>
  );
}

function ContactItem({
  href,
  icon,
  label
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-3xl bg-neutral-100 px-4 py-5 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-200 focus-ring" href={href}>
      {icon}
      <span className="break-all text-center">{label}</span>
    </a>
  );
}
