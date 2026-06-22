"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Car,
  Cpu,
  Download,
  Globe2,
  GraduationCap,
  Megaphone
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import ContactLanyardModal from "@/components/ContactLanyardModal";
import DisplayCards from "@/components/ui/display-cards";
import { contact, content, type Locale } from "@/lib/profile";

const sectionIds = ["home", "experience", "contact"] as const;
const heroVideoSrc =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

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
        className="min-h-screen overflow-hidden bg-black text-neutral-950"
        id="main-content"
        lang={locale === "zh" ? "zh" : "en"}
        tabIndex={-1}
      >
        <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
          <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between gap-3">
            <a
              className="liquid-glass flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-2xl italic text-white focus-ring"
              href="#home"
            >
              CL
            </a>

            <div className="liquid-glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex">
              {nav.map((item) =>
                item.id === "contact" ? (
                  <button
                    aria-expanded={contactOpen}
                    aria-haspopup="dialog"
                    className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-ring"
                    key={item.id}
                    onClick={() => setContactOpen(true)}
                    ref={contactButtonRef}
                    type="button"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-ring"
                    href={`#${item.id}`}
                    key={item.id}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>

            <button
              aria-label={`${languageLabel} language toggle`}
              className="liquid-glass inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-ring"
              onClick={() => setLocale(oppositeLocale)}
              type="button"
            >
              <Globe2 aria-hidden="true" size={14} />
              {languageLabel}
            </button>
          </nav>
          <div className="mt-3 md:hidden">
            <div className="liquid-glass mx-auto flex max-w-[calc(100vw-2rem)] gap-3 overflow-x-auto rounded-full px-4 py-3">
              {nav.map((item) =>
                item.id === "contact" ? (
                  <button
                    aria-expanded={contactOpen}
                    aria-haspopup="dialog"
                    className="shrink-0 text-xs font-medium text-white/80 transition-colors hover:text-white focus-ring"
                    key={item.id}
                    onClick={() => setContactOpen(true)}
                    type="button"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    className="shrink-0 text-xs font-medium text-white/80 transition-colors hover:text-white focus-ring"
                    href={`#${item.id}`}
                    key={item.id}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
        </header>

        <ContactLanyardModal
          onClose={() => setContactOpen(false)}
          open={contactOpen}
          returnFocusRef={contactButtonRef}
        />

        <section
          className="page-section relative flex min-h-screen items-center overflow-hidden bg-black px-5 py-28 sm:px-6 lg:px-8"
          id="home"
        >
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
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_18%_18%,rgba(0,102,204,0.3),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.56)_45%,rgba(0,0,0,0.28))]" />
          <div className="section-shell relative z-10 grid min-h-[calc(100vh-12rem)] items-center gap-14 pt-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-2xl text-left">
              <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-white">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-950">
                  Portfolio
                </span>
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
                  className="liquid-glass-strong inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-colors hover:bg-white/15 focus-ring"
                  href="#experience"
                >
                  {t.hero.primaryCta}
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-neutral-950 transition-colors hover:bg-white/85 focus-ring"
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

            <HeroExperienceCards locale={locale} />
          </div>
        </section>
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

function HeroExperienceCards({ locale }: { locale: Locale }) {
  const items = content[locale].sections.experience.items;
  const education = content[locale].sections.education;
  const iconMap = {
    "imco-business-systems-analyst": <BriefcaseBusiness size={18} />,
    "mec-tech-algorithm-engineer": <Cpu size={18} />,
    "nakama-brand-product-analyst": <BarChart3 size={18} />,
    "nissan-business-systems-analyst": <Car size={18} />,
    "hgtech-international-business-analyst": <Megaphone size={18} />
  };
  const tones = ["#0ea5e9", "#22c55e", "#f97316", "#8b5cf6", "#ef4444", "#facc15"];
  const offsets = [
    "experience-card-one",
    "experience-card-two",
    "experience-card-three",
    "experience-card-four",
    "experience-card-five",
    "experience-card-six"
  ];
  const cardItems = items.slice(0, 5).map((item, index) => ({
    href: `/experience/${item.slug}`,
    icon: iconMap[item.slug as keyof typeof iconMap] ?? <ArrowRight size={18} />,
    title: item.subtitle,
    description: item.title,
    date: item.meta,
    tone: tones[index],
    className: offsets[index]
  })).concat({
    href: "/education",
    icon: <GraduationCap size={18} />,
    title: education.eyebrow,
    description: locale === "en" ? "Waterloo, Fudan, and Queen's" : "Waterloo、Fudan 与 Queen's",
    date: locale === "en" ? "Academic Timeline" : "教育时间线",
    tone: tones[5],
    className: offsets[5]
  });

  return (
    <section
      aria-labelledby="experience-card-heading"
      className="page-section mx-auto w-full max-w-[34rem] scroll-mt-36 lg:mx-0 lg:justify-self-end"
      id="experience"
    >
      <div className="liquid-glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/85">
        <BriefcaseBusiness aria-hidden="true" size={16} />
        <span id="experience-card-heading">
          {locale === "en" ? "Hover To Explore Experience" : "悬停查看经历"}
        </span>
      </div>
      <DisplayCards cards={cardItems} />
    </section>
  );
}
