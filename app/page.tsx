"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  Download,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Workflow
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { contact, content, type Locale } from "@/lib/profile";

const sectionIds = ["home", "about", "experience", "projects", "education", "contact"] as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = content[locale];
  const oppositeLocale = locale === "en" ? "zh" : "en";
  const nav = useMemo(
    () => sectionIds.map((id) => ({ id, label: t.nav[id] })),
    [t.nav]
  );

  return (
    <main className="min-h-screen overflow-hidden bg-white text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <nav className="section-shell flex h-14 items-center justify-between">
          <a className="text-sm font-semibold tracking-normal text-neutral-950 focus-ring" href="#home">
            {t.displayName}
          </a>

          <div className="hidden items-center gap-7 md:flex">
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
      </header>

      <section className="section-shell flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-20 text-center" id="home">
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

      <section className="bg-neutral-100 py-24" id="about">
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

      <section className="py-24" id="experience">
        <div className="section-shell">
          <SectionIntro eyebrow={t.experience.eyebrow} title={t.experience.title} />

          <div className="mt-12 grid gap-5">
            {t.experience.items.map((job) => (
              <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8" key={`${job.company}-${job.period}`}>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#0066cc]">{job.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-normal text-neutral-950">{job.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {job.bullets.map((bullet) => (
                    <li className="flex gap-3 text-sm leading-6 text-neutral-700" key={bullet}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-24 text-white" id="projects">
        <div className="section-shell">
          <SectionIntro eyebrow={t.projects.eyebrow} title={t.projects.title} inverted />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.projects.items.map((project, index) => (
              <article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]" key={project.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-neutral-950">
                  {index === 0 ? <Workflow size={20} /> : <BarChart3 size={20} />}
                </div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">{project.tag}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 py-24" id="education">
        <div className="section-shell">
          <SectionIntro eyebrow={t.education.eyebrow} title={t.education.title} />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {t.education.items.map((item) => (
              <article className="rounded-[2rem] bg-white p-7 shadow-sm" key={item.degree}>
                <p className="text-sm font-semibold text-[#0066cc]">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-normal text-neutral-950">{item.degree}</h3>
                <p className="mt-2 text-base font-medium text-neutral-700">{item.school}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <span className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-700" key={detail}>
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" id="contact">
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
