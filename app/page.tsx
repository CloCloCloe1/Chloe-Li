"use client";

import {
  Award,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Download,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo, useRef, useState } from "react";
import CardSwap, { Card } from "@/components/CardSwap";
import ContactLanyardModal from "@/components/ContactLanyardModal";
import { contact, content, type Locale, type PortfolioItem, type SectionKey } from "@/lib/profile";

const sectionIds = ["home", "about", "experience", "education", "publications", "certifications", "contact"] as const;
const detailSections: SectionKey[] = ["publications", "certifications"];
const heroVideoSrc =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

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
    imageClassName: "max-h-24"
  },
  "imco-business-systems-analyst": {
    src: "/brand/imco.png?v=2",
    backgroundColor: "#eef9fb",
    blend: true,
    imageClassName: "max-h-28"
  },
  "nissan-business-systems-analyst": {
    src: "/brand/nissan.svg",
    backgroundColor: "#f5f5f7",
    imageClassName: "max-h-20"
  },
  "hgtech-international-business-analyst": {
    src: "/brand/hgtech.png?v=2",
    backgroundColor: "#fff5f5",
    blend: true,
    imageClassName: "max-h-24"
  },
  "waterloo-management-sciences": {
    src: "/brand/waterloo.png",
    backgroundColor: "#f5f5f7",
    blend: true,
    imageClassName: "max-h-24"
  },
  "fudan-international-summer-session": {
    src: "/brand/fudan.jpg",
    backgroundColor: "#f5f8ff",
    fullBleed: true,
    imageClassName: "object-cover"
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
    imageClassName: "max-h-24"
  },
  "scd-stacked-carton-dataset": {
    src: "/brand/mdpi.png?v=2",
    backgroundColor: "#f2f7fc",
    blend: true,
    imageClassName: "max-h-24"
  }
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [contactOpen, setContactOpen] = useState(false);
  const contactButtonRef = useRef<HTMLButtonElement | null>(null);
  const t = content[locale];
  const oppositeLocale = locale === "en" ? "zh" : "en";
  const languageLabel = locale === "en" ? "\u4e2d\u6587" : "EN";
  const nav = useMemo(
    () => sectionIds.map((id) => ({ id, label: t.nav[id] })),
    [t.nav]
  );

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip To Main Content
      </a>
    <main
      className="min-h-screen overflow-hidden bg-white text-neutral-950"
      id="main-content"
      lang={locale === "zh" ? "zh" : "en"}
      tabIndex={-1}
    >
      <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
        <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <a className="liquid-glass flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-2xl italic text-white focus-ring" href="#home">
            CL
          </a>

          <div className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex">
            {nav.map((item) => (
              item.id === "contact" ? (
                <button
                  aria-expanded={contactOpen}
                  aria-haspopup="dialog"
                  className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 hover:text-white focus-ring"
                  key={item.id}
                  onClick={() => setContactOpen(true)}
                  ref={contactButtonRef}
                  type="button"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10 hover:text-white focus-ring"
                  href={`#${item.id}`}
                  key={item.id}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          <button
            aria-label={`${languageLabel} language toggle`}
            className="liquid-glass inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-xs font-semibold text-white transition hover:bg-white/10 focus-ring"
            onClick={() => setLocale(oppositeLocale)}
            type="button"
          >
            <Globe2 aria-hidden="true" size={14} />
            {languageLabel}
          </button>
        </nav>
        <div className="mt-3 md:hidden">
          <div className="liquid-glass mx-auto flex max-w-[calc(100vw-2rem)] gap-3 overflow-x-auto rounded-full px-4 py-3">
            {nav.map((item) => (
              item.id === "contact" ? (
                <button
                  aria-expanded={contactOpen}
                  aria-haspopup="dialog"
                  className="shrink-0 text-xs font-medium text-white/80 transition hover:text-white focus-ring"
                  key={item.id}
                  onClick={() => setContactOpen(true)}
                  type="button"
                >
                  {item.label}
                </button>
              ) : (
                <a
                  className="shrink-0 text-xs font-medium text-white/80 transition hover:text-white focus-ring"
                  href={`#${item.id}`}
                  key={item.id}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      </header>
      <ContactLanyardModal
        onClose={() => setContactOpen(false)}
        open={contactOpen}
        returnFocusRef={contactButtonRef}
      />

      <section className="page-section relative flex min-h-screen items-center overflow-hidden bg-black px-5 py-28 sm:px-6 lg:px-8" id="home">
        <video
          aria-hidden="true"
          autoPlay
          className="hero-video"
          loop
          muted
          playsInline
          poster="/linkedin-preview.jpg"
          preload="metadata"
          src={heroVideoSrc}
        />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_18%_18%,rgba(0,102,204,0.28),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.86),rgba(0,0,0,0.52)_45%,rgba(0,0,0,0.28))]" />
        <div className="section-shell relative z-10 grid min-h-[calc(100vh-12rem)] items-center gap-12 pt-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-2xl text-left">
            <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-white">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-950">Portfolio</span>
              <span className="pr-3 text-sm font-medium text-white/85">{t.hero.eyebrow}</span>
            </div>
            <p className="mt-8 font-heading text-4xl italic tracking-normal text-white sm:text-5xl">
              {t.displayName}
            </p>
            <h1 className="mt-4 max-w-3xl font-heading text-6xl italic leading-[0.88] tracking-normal text-white sm:text-7xl lg:text-[5.6rem]">
              <BlurWords text={t.hero.title} />
            </h1>
            <p className="mt-7 max-w-xl text-base font-light leading-8 text-white/85 sm:text-lg">
              {t.hero.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="liquid-glass-strong inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition hover:bg-white/15 focus-ring"
                href="#experience"
              >
                {t.hero.primaryCta}
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:bg-white/85 focus-ring"
                download="ChloeLi_Analyst_resume.pdf"
                href={contact.resumeUrl}
              >
                <Download aria-hidden="true" size={16} />
                {t.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {t.metrics.map((metric) => (
                <div className="liquid-glass rounded-[1.4rem] px-5 py-5" key={metric.label}>
                  <p className="font-heading text-4xl italic leading-none text-white">{metric.value}</p>
                  <p className="mt-3 text-xs font-light leading-5 text-white/80">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <HeroCardSwap locale={locale} />
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
                  <Check aria-hidden="true" className="mt-0.5 shrink-0 text-[#0066cc]" size={18} />
                  <p className="text-sm font-medium leading-6 text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TimelineSection locale={locale} />

      {detailSections.map((section, index) => (
        <LineupSection
          background={index % 2 === 0 ? "gray" : "white"}
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
            <ContactItem href={`mailto:${contact.email}`} icon={<Mail aria-hidden="true" size={18} />} label={contact.email} />
            <ContactItem href={`tel:${contact.phone}`} icon={<Phone aria-hidden="true" size={18} />} label={contact.phone} />
            <ContactItem href={contact.linkedin} icon={<Linkedin aria-hidden="true" size={18} />} label="LinkedIn" />
            <ContactItem href="#contact" icon={<MapPin aria-hidden="true" size={18} />} label={contact.location} />
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
          <p>Business Analyst | Product Analyst | Data Analyst</p>
        </div>
      </footer>
    </main>
    </>
  );
}

function BlurWords({ text }: { text: string }) {
  return (
    <span className="flex flex-wrap" aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span
          aria-hidden="true"
          className="blur-word"
          key={`${word}-${index}`}
          style={{ animationDelay: `${0.08 * index + 0.18}s` }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

function HeroCardSwap({ locale }: { locale: Locale }) {
  const t = content[locale];
  const cards = [
    {
      href: "#experience",
      eyebrow: t.nav.experience,
      title: locale === "en" ? "Experience" : "经历",
      body:
        locale === "en"
          ? "AI workflows, financial systems, product data, and business operations translated into measurable delivery."
          : "覆盖 AI 工作流、金融系统、产品数据和业务运营的项目经验。",
      stat: `${t.sections.experience.items.length} roles`,
      icon: <BriefcaseBusiness aria-hidden="true" size={25} />,
      tags: ["AI", "Systems", "Product"]
    },
    {
      href: "#publications",
      eyebrow: t.nav.publications,
      title: locale === "en" ? "Publications" : "发表",
      body:
        locale === "en"
          ? "Research work across precision control, dataset design, detection, and segmentation systems."
          : "包含精密控制、数据集构建、检测与分割方向的研究成果。",
      stat: `${t.sections.publications.items.length} papers`,
      icon: <BookOpen aria-hidden="true" size={25} />,
      tags: ["Research", "Data", "Systems"]
    },
    {
      href: "#certifications",
      eyebrow: t.nav.certifications,
      title: locale === "en" ? "Certifications" : "证书",
      body:
        locale === "en"
          ? "Focused learning in Excel, Power Automate, collaboration, professional communication, and workplace awareness."
          : "涵盖 Excel、Power Automate、协作沟通与职场意识的专业学习。",
      stat: `${t.sections.certifications.items.length} certificates`,
      icon: <Award aria-hidden="true" size={25} />,
      tags: ["Excel", "Automation", "Business"]
    }
  ];

  return (
    <div aria-label="Featured portfolio sections">
      <div className="card-swap-stage hidden lg:block">
        <CardSwap cardDistance={52} delay={4600} height={320} pauseOnHover verticalDistance={62} width={440}>
          {cards.map((card) => (
            <Card className="liquid-glass-strong" key={card.href}>
              <a className="flex h-full flex-col p-6 text-white focus-ring" href={card.href}>
                <span className="flex items-start justify-between gap-5">
                  <span className="liquid-glass flex h-12 w-12 items-center justify-center rounded-[1rem] text-white">
                    {card.icon}
                  </span>
                  <span className="flex max-w-[70%] flex-wrap justify-end gap-1.5">
                    {card.tags.map((tag) => (
                      <span className="liquid-glass rounded-full px-3 py-1 text-[11px] font-medium text-white/88" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="mt-auto block">
                  <span className="text-sm font-semibold text-[#8ec5ff]">{card.eyebrow}</span>
                  <span className="mt-3 block font-heading text-5xl italic leading-none tracking-normal text-white">{card.title}</span>
                  <span className="mt-4 block max-w-[32ch] text-sm font-light leading-6 text-white/82">{card.body}</span>
                  <span className="mt-6 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-950">{card.stat}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Open
                      <ArrowRight aria-hidden="true" size={15} />
                    </span>
                  </span>
                </span>
              </a>
            </Card>
          ))}
        </CardSwap>
      </div>

      <div className="grid gap-3 lg:hidden">
        {cards.map((card) => (
          <a className="liquid-glass rounded-[1.4rem] p-5 text-white focus-ring" href={card.href} key={card.href}>
            <span className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-3">
                <span className="liquid-glass flex h-11 w-11 items-center justify-center rounded-[0.9rem]">
                  {card.icon}
                </span>
                <span>
                  <span className="block text-xs font-semibold text-[#8ec5ff]">{card.eyebrow}</span>
                  <span className="block font-heading text-3xl italic leading-none">{card.title}</span>
                </span>
              </span>
              <ArrowRight aria-hidden="true" size={18} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function TimelineSection({ locale }: { locale: Locale }) {
  const work = content[locale].sections.experience;
  const education = content[locale].sections.education;
  const timelineItems = [
    { item: work.items[0], section: "experience" as SectionKey, type: work.eyebrow, accent: "#2563eb", year: "2025" },
    { item: work.items[1], section: "experience" as SectionKey, type: work.eyebrow, accent: "#0ea5a4", year: "2026" },
    { item: work.items[2], section: "experience" as SectionKey, type: work.eyebrow, accent: "#0f6ea8", year: "2026" },
    { item: work.items[3], section: "experience" as SectionKey, type: work.eyebrow, accent: "#111827", year: "2024" },
    { item: education.items[0], section: "education" as SectionKey, type: education.eyebrow, accent: "#eab308", year: "2025" },
    { item: work.items[4], section: "experience" as SectionKey, type: work.eyebrow, accent: "#ef4444", year: "2023" },
    { item: education.items[1], section: "education" as SectionKey, type: education.eyebrow, accent: "#1d4ed8", year: "2021" },
    { item: education.items[2], section: "education" as SectionKey, type: education.eyebrow, accent: "#b91c1c", year: "2019" }
  ].filter((entry) => entry.item);
  const title =
    locale === "en"
      ? "A timeline of business, product, data, and systems work."
      : "从教育背景到业务、产品、数据与系统实践的时间轴。";
  const summary =
    locale === "en"
      ? "Education and work experience are shown side by side, so the path from analytical training to applied product, systems, and workflow delivery is easy to scan."
      : "左侧展示教育经历，右侧展示工作经历，帮助快速理解从分析训练到产品、系统和业务流程实践的成长路径。";

  return (
    <section className="page-section bg-white py-24" id="experience">
      <span className="block scroll-mt-24" id="education" />
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionIntro eyebrow={work.eyebrow} title={title} />
          <p className="text-lg leading-8 text-neutral-600">{summary}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-200 focus-ring" href="#education">
            {education.lineup}
          </a>
          <a className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-200 focus-ring" href="#experience">
            {work.lineup}
          </a>
        </div>

        <div className="relative mt-14">
          <div className="absolute bottom-4 left-7 top-4 w-1 rounded-full bg-neutral-300 md:left-1/2 md:-translate-x-1/2" />
          <ol className="grid gap-7 md:gap-10">
            {timelineItems.map((entry) => (
              <WavyTimelineItem
                accent={entry.accent}
                item={entry.item}
                key={`${entry.section}-${entry.item.slug}`}
                section={entry.section}
                type={entry.type}
                year={entry.year}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function WavyTimelineItem({
  item,
  section,
  type,
  accent,
  year
}: {
  item: PortfolioItem;
  section: SectionKey;
  type: string;
  accent: string;
  year: string;
}) {
  const isEducation = section === "education";

  return (
    <li className="relative grid min-h-40 grid-cols-[4rem_1fr] gap-4 md:grid-cols-[1fr_8rem_1fr] md:items-center">
      <div className={isEducation ? "md:order-1" : "md:order-3 md:col-start-3"}>
        <TimelineCard accent={accent} item={item} section={section} type={type} />
      </div>
      <div className="relative z-10 order-first flex items-start justify-center md:order-2 md:col-start-2 md:items-center">
        <TimelineNode accent={accent} slug={item.slug} year={year} />
      </div>
      <div className={isEducation ? "hidden md:order-3 md:block" : "hidden md:order-1 md:block"} />
    </li>
  );
}

function TimelineNode({ accent, slug, year }: { accent: string; slug: string; year: string }) {
  const brandVisual = brandVisuals[slug];

  return (
    <span className="flex flex-col items-center gap-2">
      <span
        className="rounded-full px-3 py-1 text-sm font-semibold text-white shadow-sm md:text-base"
        style={{ backgroundColor: accent }}
      >
        {year}
      </span>
      <span
        className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-lg ring-4 md:h-20 md:w-20 md:p-2"
        style={{ ["--tw-ring-color" as string]: accent }}
      >
        {brandVisual ? (
          brandVisual.fullBleed ? (
          <span
            aria-hidden="true"
            className="h-full w-full rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url('${brandVisual.src}')` }}
          />
          ) : (
            <Image
              alt=""
              className={`max-h-full max-w-full object-contain ${brandVisual.blend ? "mix-blend-multiply" : ""}`}
              height={80}
              src={brandVisual.src}
              width={80}
            />
          )
        ) : (
          <span className="h-4 w-4 rounded-full" style={{ backgroundColor: accent }} />
        )}
      </span>
    </span>
  );
}

function TimelineCard({
  item,
  section,
  type,
  accent
}: {
  item: PortfolioItem;
  section: SectionKey;
  type: string;
  accent: string;
}) {
  return (
    <Link
      className="group block rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-ring sm:p-6"
      href={`/${section}/${item.slug}`}
    >
      <span>
        <span className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            {type}
          </span>
          <span className="text-sm font-semibold text-neutral-500">{item.meta}</span>
        </span>
        <span className="mt-3 block text-xl font-semibold tracking-normal text-neutral-950">{item.title}</span>
        <span className="mt-1 block text-sm font-medium text-neutral-600">{item.subtitle}</span>
        {item.description ? (
          <span className="mt-3 line-clamp-3 block text-sm leading-6 text-neutral-700">{item.description}</span>
        ) : null}
        <span className="mt-4 flex flex-wrap gap-2">
          {item.tags?.slice(0, 3).map((tag) => (
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700" key={tag}>
              {tag}
            </span>
          ))}
        </span>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0066cc]">
          Learn More
          <ArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" size={15} />
        </span>
      </span>
    </Link>
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
          {sectionData.items.map((item) => (
            <PortfolioCard item={item} key={item.slug} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  section
}: {
  item: PortfolioItem;
  section: SectionKey;
}) {
  if (section === "certifications") {
    const pdf = item.attachments?.[0];

    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CertificatePreview item={item} compact />
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-sm font-semibold text-[#0066cc]">{item.meta}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-normal text-neutral-950">{item.title}</h3>
          <p className="mt-2 text-sm font-medium text-neutral-600">{item.subtitle}</p>
          {item.description ? <p className="mt-5 text-sm leading-7 text-neutral-700">{item.description}</p> : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {item.url ? (
              <a
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#0066cc] px-4 text-sm font-semibold text-white transition hover:bg-[#0057b8] focus-ring"
                href={item.url}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
                <ArrowRight aria-hidden="true" size={15} />
              </a>
            ) : null}
            {pdf ? (
              <a
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-neutral-500 bg-white px-4 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 focus-ring"
                href={pdf.url}
                rel="noreferrer"
                target="_blank"
              >
                PDF
                <Download aria-hidden="true" size={15} />
              </a>
            ) : null}
            <Link
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-neutral-100 px-4 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-200 focus-ring"
              href={`/${section}/${item.slug}`}
            >
              Details
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <Link
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-ring"
      href={`/${section}/${item.slug}`}
    >
      <VisualTile slug={item.slug} />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-sm font-semibold text-[#0066cc]">{item.meta}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-normal text-neutral-950">{item.title}</h3>
        <p className="mt-2 text-sm font-medium text-neutral-600">{item.subtitle}</p>
        {item.description ? <p className="mt-5 text-sm leading-7 text-neutral-700">{item.description}</p> : null}
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0066cc]">
          <span>Learn More</span>
          <ArrowRight aria-hidden="true" className="transition group-hover:translate-x-1" size={16} />
        </div>
      </div>
    </Link>
  );
}

function VisualTile({ slug }: { slug: string }) {
  const brandVisual = brandVisuals[slug];

  if (!brandVisual) {
    return (
      <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[#f5f5f7]">
        <div className="text-center">
          <p className="text-sm font-semibold text-[#0066cc]">LinkedIn Learning</p>
          <p className="mt-2 text-3xl font-semibold tracking-normal text-neutral-950">Certificate</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex h-44 items-center justify-center overflow-hidden bg-neutral-100"
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
          height={220}
          src={brandVisual.src}
          width={640}
        />
      ) : null}
    </div>
  );
}

function CertificatePreview({ item, compact = false }: { item: PortfolioItem; compact?: boolean }) {
  const pdf = item.attachments?.[0];

  if (!item.previewImage) {
    return (
      <div className={`relative flex ${compact ? "h-44" : "min-h-80"} items-center justify-center overflow-hidden bg-[#f5f5f7]`}>
        <div className="text-center">
          <p className="text-sm font-semibold text-[#0066cc]">LinkedIn Learning</p>
          <p className="mt-2 text-3xl font-semibold tracking-normal text-neutral-950">Certificate</p>
        </div>
      </div>
    );
  }

  return (
    <a
      aria-label={`Open ${item.title} PDF certificate`}
      className={`group/preview relative block overflow-hidden bg-[#f5f5f7] focus-ring ${compact ? "h-44" : "min-h-80"}`}
      href={pdf?.url ?? item.previewImage}
      rel="noreferrer"
      target="_blank"
    >
      <Image
        alt={`${item.title} certificate preview`}
        className="object-cover object-top transition duration-300 group-hover/preview:scale-[1.02]"
        fill
        sizes={compact ? "(min-width: 1024px) 33vw, 100vw" : "(min-width: 1024px) 50vw, 100vw"}
        src={item.previewImage}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 to-white/0 p-4">
        <p className="text-sm font-semibold text-neutral-950">{item.title}</p>
      </div>
    </a>
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
