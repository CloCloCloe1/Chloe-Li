"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import ContactLanyardModal from "@/components/ContactLanyardModal";

export type ParallaxSectionItem = {
  slug: string;
  title: string;
  subtitle: string;
  meta: string;
  description?: string;
  bullets?: string[];
  tags?: string[];
  url?: string;
  cta?: string;
  attachments?: { label: string; url: string }[];
  workSamples?: {
    title: string;
    label: string;
    url?: string;
    problem: string;
    solution: string;
    outcome: string;
    tags: string[];
  }[];
  image: {
    src: string;
    alt: string;
    fullBleed?: boolean;
    blend?: boolean;
  };
};

type ParallaxSectionPageProps = {
  eyebrow: string;
  section: string;
  sectionKey: string;
  title: string;
  items: ParallaxSectionItem[];
};

const heroVideoSrc =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

export default function ParallaxSectionPage({
  section,
  sectionKey,
  title,
  items
}: ParallaxSectionPageProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const contactButtonRef = useRef<HTMLButtonElement | null>(null);
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Publication", href: "/publications" },
    { label: "Certification", href: "/certifications" }
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip To Main Content
      </a>
      <main className="relative min-h-screen overflow-x-hidden bg-black text-white" id="main-content" tabIndex={-1}>
        <video
          aria-hidden="true"
          autoPlay
          className="section-video-bg"
          loop
          muted
          playsInline
          poster="/linkedin-preview.jpg"
          preload="metadata"
          src={heroVideoSrc}
        />
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,102,204,0.28),transparent_34%),linear-gradient(120deg,rgba(0,0,0,0.9),rgba(0,0,0,0.58)_52%,rgba(0,0,0,0.82))]" />

        <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
          <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between gap-3">
            <Link
              className="liquid-glass flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-2xl italic text-white focus-ring"
              href="/"
            >
              CL
            </Link>
            <div className="liquid-glass hidden min-h-12 items-center gap-1 rounded-full px-2 py-1 md:flex">
              {navItems.map((item) => (
                <Link
                  aria-current={item.href === `/${sectionKey}` ? "page" : undefined}
                  className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-ring"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <button
                className="rounded-full px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-ring"
                onClick={() => setContactOpen(true)}
                ref={contactButtonRef}
                type="button"
              >
                Contact
              </button>
            </div>
            <span aria-hidden="true" className="hidden h-12 w-12 md:block" />
          </nav>
          <nav aria-label="Mobile" className="mx-auto mt-3 flex max-w-6xl gap-2 overflow-x-auto pb-1 md:hidden">
            {[...navItems, { label: "Contact", href: "#contact" }].map((item) =>
              item.label === "Contact" ? (
                <button
                  className="liquid-glass min-h-10 shrink-0 rounded-full px-4 text-xs font-medium text-white/82 focus-ring"
                  key={item.label}
                  onClick={() => setContactOpen(true)}
                  type="button"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  aria-current={item.href === `/${sectionKey}` ? "page" : undefined}
                  className="liquid-glass flex min-h-10 shrink-0 items-center rounded-full px-4 text-xs font-medium text-white/82 focus-ring"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </header>

        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="max-w-4xl text-balance font-heading text-7xl italic leading-[0.9] tracking-normal text-white sm:text-8xl lg:text-[9rem]">
            {section}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">{title}</p>
          <p className="mt-16 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Scroll
            <ArrowDown aria-hidden="true" size={15} />
          </p>
        </section>

        <div className="relative z-10 flex flex-col px-6 md:px-10">
          {items.map((item, index) => (
            <ParallaxFeatureRow
              item={item}
              key={item.slug}
              reverse={index % 2 === 1}
              variant={sectionKey}
            />
          ))}
        </div>

        <ContactLanyardModal
          onClose={() => setContactOpen(false)}
          open={contactOpen}
          returnFocusRef={contactButtonRef}
        />
      </main>
    </>
  );
}

function ParallaxFeatureRow({
  item,
  reverse,
  variant
}: {
  item: ParallaxSectionItem;
  reverse: boolean;
  variant: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const imageAspect = variant === "certifications" ? "aspect-[4/3]" : "aspect-video";
  const externalCta =
    variant === "publications" ? "View Publication" : variant === "certifications" ? "View Certification" : item.cta;
  const showExternalCta = (variant === "publications" || variant === "certifications") && item.url;

  return (
    <section
      className={`grid min-h-screen items-center gap-12 py-24 md:grid-cols-2 md:gap-24 lg:gap-32 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
      ref={ref}
    >
      <motion.div style={{ y }}>
        <p className="text-sm font-semibold text-[#8ec5ff]">{item.meta}</p>
        <h2 className="mt-4 max-w-lg text-balance font-heading text-5xl italic leading-none tracking-normal text-white sm:text-6xl">
          {item.title}
        </h2>
        <p className="mt-5 text-xl font-medium leading-8 text-white/78">{item.subtitle}</p>
        {item.description ? (
          <p className="mt-8 max-w-xl text-base leading-8 text-white/70">{item.description}</p>
        ) : null}
        {item.bullets?.length ? (
          <ul className="mt-7 grid max-w-xl gap-3">
            {item.bullets.map((bullet) => (
              <li className="flex gap-3 text-sm leading-7 text-white/72" key={bullet}>
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8ec5ff]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-7 flex flex-wrap gap-2">
          {item.tags?.slice(0, 5).map((tag) => (
            <span className="liquid-glass rounded-full px-3 py-1.5 text-xs font-semibold text-white/82" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        {item.workSamples?.length ? (
          <div className="mt-8 grid max-w-xl gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/52">Selected Work Samples</p>
            {item.workSamples.map((sample) => (
              <article
                className="liquid-glass rounded-[1rem] px-4 py-4 text-sm text-white/78"
                key={sample.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#8ec5ff]">{sample.label}</p>
                    <h3 className="mt-1 text-base font-semibold text-white">{sample.title}</h3>
                  </div>
                  {sample.url ? (
                    <a
                      aria-label={`View ${sample.title} sample`}
                      className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-full bg-white/12 px-3 text-xs font-semibold text-white transition hover:bg-white/18 focus-ring"
                      href={sample.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View
                      <ArrowUpRight aria-hidden="true" size={14} />
                    </a>
                  ) : null}
                </div>
                <div className="mt-4 grid gap-3 text-xs leading-5 text-white/68">
                  <p><span className="font-semibold text-white/86">Problem:</span> {sample.problem}</p>
                  <p><span className="font-semibold text-white/86">Solution:</span> {sample.solution}</p>
                  <p><span className="font-semibold text-white/86">Outcome:</span> {sample.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        ) : null}
        {showExternalCta ? (
          <a
            className="liquid-glass-strong mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-colors hover:bg-white/15 focus-ring"
            href={item.url}
            rel="noreferrer"
            target="_blank"
          >
            {externalCta}
            <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        ) : null}
      </motion.div>

      <motion.div className="relative" style={{ clipPath, opacity }}>
        <div className={`liquid-glass-strong relative mx-auto ${imageAspect} w-full max-w-[34rem] overflow-hidden rounded-[2rem] p-8`}>
          {item.image.fullBleed ? (
            <Image
              alt={item.image.alt}
              className="object-contain p-8"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              src={item.image.src}
            />
          ) : (
            <Image
              alt={item.image.alt}
              className={`h-full w-full object-contain ${item.image.blend ? "mix-blend-screen" : ""}`}
              height={420}
              src={item.image.src}
              width={420}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
}
