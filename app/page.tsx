"use client";

import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Download,
  Globe2,
  GraduationCap,
  Menu
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("lang") === "zh") {
      setLocale("zh");
    }
  }, []);

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
              className="liquid-glass absolute right-0 hidden min-h-12 items-center gap-2 rounded-full px-4 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-ring md:inline-flex"
              onClick={() => setLocale(oppositeLocale)}
              type="button"
            >
              <Globe2 aria-hidden="true" size={14} />
              {languageLabel}
            </button>
            <div className="flex w-full items-center justify-between md:hidden">
              <div className="liquid-glass flex min-h-12 flex-col justify-center rounded-full px-4 text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/58">Portfolio</span>
                <span className="text-sm font-semibold leading-none text-white">Business Analyst</span>
              </div>
              <button
                aria-expanded={mobileMenuOpen}
                aria-label="Open navigation menu"
                className="liquid-glass inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-xs font-semibold text-white transition hover:bg-white/10 focus-ring"
                onClick={() => setMobileMenuOpen((open) => !open)}
                type="button"
              >
                <Menu aria-hidden="true" size={16} />
                Menu
              </button>
            </div>
          </nav>
          {mobileMenuOpen ? (
            <nav aria-label="Mobile" className="mobile-nav-dropdown liquid-glass md:hidden">
              {nav.map((item) =>
                item.id === "contact" ? (
                  <button
                    aria-expanded={contactOpen}
                    aria-haspopup="dialog"
                    className="mobile-nav-item text-left"
                    key={item.id}
                    onClick={() => {
                      setContactOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    type="button"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    className="mobile-nav-item"
                    href={item.href}
                    key={item.id}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <button
                className="mobile-nav-item inline-flex items-center gap-2 text-left"
                onClick={() => {
                  setLocale(oppositeLocale);
                  setMobileMenuOpen(false);
                }}
                type="button"
              >
                <Globe2 aria-hidden="true" size={14} />
                {languageLabel}
              </button>
            </nav>
          ) : null}
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
          <div className="home-hero-shell section-shell relative z-10 flex min-h-[calc(100vh-12rem)] flex-col justify-center pt-10">
            <div className="home-hero-summary max-w-5xl text-left">
              <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-2 py-1.5 text-white">
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-950">
                  Portfolio
                </span>
                <span className="pr-3 text-sm font-medium text-white/85">{t.hero.eyebrow}</span>
              </div>
              <p className="mt-8 font-heading text-[clamp(1.8rem,4vw,3.15rem)] italic tracking-normal text-white">
                {t.displayName}
              </p>
              <h1 className="mt-4 max-w-none whitespace-nowrap font-heading text-[clamp(2.4rem,5.35vw,4.2rem)] italic leading-[0.9] tracking-normal text-white">
                <HeroTitle text={t.hero.title} />
              </h1>
            </div>

            <div className="home-hero-detail-grid mt-8 grid gap-10 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] lg:items-start">
              <div className="text-left">
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

              <div className="mt-10 hidden max-w-2xl gap-3 sm:grid-cols-3 lg:grid">
                {t.metrics.map((metric) => (
                  <div className="liquid-glass rounded-[1.4rem] px-5 py-5" key={metric.label}>
                    <p className="font-heading text-4xl italic leading-none text-white">{metric.value}</p>
                    <p className="mt-3 text-xs font-light leading-5 text-white/80">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="home-mobile-lower mt-10 lg:hidden">
                <div className="grid gap-3">
                  {t.metrics.map((metric) => (
                    <div className="liquid-glass rounded-[1.1rem] px-4 py-4" key={metric.label}>
                      <p className="font-heading text-3xl italic leading-none text-white">{metric.value}</p>
                      <p className="mt-2 text-[0.68rem] font-light leading-4 text-white/80">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <HeroPortfolioCards compact locale={locale} />
              </div>
            </div>

            <div className="hidden lg:block">
              <HeroPortfolioCards locale={locale} />
            </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function HeroTitle({ text }: { text: string }) {
  if (text === "Data clarity for better products, systems, and decisions.") {
    return (
      <span>
        <span className="sr-only">{text}</span>
        <span aria-hidden="true" className="block whitespace-nowrap">
          <BlurWords noWrap text="Data clarity for better products, systems, and decisions." />
        </span>
      </span>
    );
  }

  return <BlurWords text={text} />;
}

function BlurWords({ delayOffset = 0.18, noWrap = false, text }: { delayOffset?: number; noWrap?: boolean; text: string }) {
  return (
    <span className={`flex ${noWrap ? "flex-nowrap whitespace-nowrap" : "flex-wrap"}`} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span
          aria-hidden="true"
          className="blur-word"
          key={`${word}-${index}`}
          style={{ animationDelay: `${0.08 * index + delayOffset}s` }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

function HeroPortfolioCards({ compact = false, locale }: { compact?: boolean; locale: Locale }) {
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
      className={`page-section mx-auto w-full scroll-mt-36 ${compact ? "home-mobile-card-zone" : "max-w-[42rem] lg:mx-0 lg:justify-self-end"}`}
      id={compact ? undefined : "experience"}
    >
      <DisplayCards cards={cardItems} />
    </section>
  );
}
