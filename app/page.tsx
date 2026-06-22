"use client";

import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  Globe2,
  GraduationCap
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import ContactLanyardModal from "@/components/ContactLanyardModal";
import DisplayCards from "@/components/ui/display-cards";
import { contact, content, type Locale } from "@/lib/profile";

const navItems = [
  { id: "home", href: "#home" },
  { id: "education", href: "/education" },
  { id: "experience", href: "/experience" },
  { id: "publications", href: "/publications" },
  { id: "certifications", href: "/certifications" },
  { id: "contact", href: "#contact" }
] as const;

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
    () =>
      navItems.map((item) => ({
        ...item,
        label:
          locale === "en" && item.id === "publications"
            ? "Publication"
            : locale === "en" && item.id === "certifications"
              ? "Certification"
              : t.nav[item.id]
      })),
    [locale, t.nav]
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
        <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-5">
          <nav aria-label="Primary" className="relative mx-auto flex w-full max-w-[80rem] items-center justify-center gap-3">
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
                  <Link
                    className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-ring"
                    href={item.href}
                    key={item.id}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            <button
              aria-label={`${languageLabel} language toggle`}
              className="liquid-glass absolute right-0 inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-ring"
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
                  <Link
                    className="shrink-0 text-xs font-medium text-white/80 transition-colors hover:text-white focus-ring"
                    href={item.href}
                    key={item.id}
                  >
                    {item.label}
                  </Link>
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
          className="page-section relative flex min-h-screen items-center overflow-hidden bg-black px-4 py-28 sm:px-5 lg:px-6"
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
          <div className="section-shell relative z-10 grid min-h-[calc(100vh-12rem)] items-center gap-12 pt-10 lg:grid-cols-[0.88fr_1.12fr] xl:gap-16">
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

            <HeroPortfolioCards locale={locale} />
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

function HeroPortfolioCards({ locale }: { locale: Locale }) {
  const cardItems = [
    {
      href: "/education",
      icon: <GraduationCap size={18} />,
      title: locale === "en" ? "Education" : "教育",
      description: "Waterloo, Fudan, and Queen's",
      date: "Academic Timeline",
      tone: "#facc15",
      className: "experience-card-one"
    },
    {
      href: "/experience",
      icon: <BriefcaseBusiness size={18} />,
      title: locale === "en" ? "Experience" : "经历",
      description: "AI, systems, product, and business analysis",
      date: "Work Timeline",
      tone: "#0ea5e9",
      className: "experience-card-two"
    },
    {
      href: "/publications",
      icon: <BookOpen size={18} />,
      title: locale === "en" ? "Publication" : "发表",
      description: "Control systems and computer vision research",
      date: "Research Work",
      tone: "#22c55e",
      className: "experience-card-three"
    },
    {
      href: "/certifications",
      icon: <Award size={18} />,
      title: locale === "en" ? "Certification" : "认证",
      description: "Excel, automation, communication, and bias training",
      date: "Learning Record",
      tone: "#8b5cf6",
      className: "experience-card-four"
    }
  ];

  return (
    <section
      aria-label={locale === "en" ? "Portfolio sections" : "Portfolio sections"}
      className="page-section mx-auto w-full max-w-[42rem] scroll-mt-36 lg:mx-0 lg:justify-self-end"
      id="experience"
    >
      <DisplayCards cards={cardItems} />
    </section>
  );
}
