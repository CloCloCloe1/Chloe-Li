"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export type ParallaxSectionItem = {
  slug: string;
  title: string;
  subtitle: string;
  meta: string;
  description?: string;
  tags?: string[];
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
  title: string;
  items: ParallaxSectionItem[];
};

const heroVideoSrc =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

export default function ParallaxSectionPage({
  eyebrow,
  section,
  title,
  items
}: ParallaxSectionPageProps) {
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
          <nav aria-label="Section" className="mx-auto flex max-w-6xl items-center justify-between gap-3">
            <Link
              className="liquid-glass flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-heading text-2xl italic text-white focus-ring"
              href="/"
            >
              CL
            </Link>
            <Link
              className="liquid-glass inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-ring"
              href="/"
            >
              Home
            </Link>
          </nav>
        </header>

        <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="liquid-glass rounded-full px-4 py-2 text-sm font-semibold text-white/85">{eyebrow}</p>
          <h1 className="mt-8 max-w-4xl font-heading text-7xl italic leading-[0.9] tracking-normal text-white sm:text-8xl lg:text-[9rem]">
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
              section={section.toLowerCase()}
            />
          ))}
        </div>
      </main>
    </>
  );
}

function ParallaxFeatureRow({
  item,
  reverse,
  section
}: {
  item: ParallaxSectionItem;
  reverse: boolean;
  section: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipPath = useTransform(scrollYProgress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <section
      className={`grid min-h-screen items-center gap-10 py-24 md:grid-cols-2 md:gap-20 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
      ref={ref}
    >
      <motion.div style={{ y }}>
        <p className="text-sm font-semibold text-[#8ec5ff]">{item.meta}</p>
        <h2 className="mt-4 max-w-lg font-heading text-5xl italic leading-none tracking-normal text-white sm:text-6xl">
          {item.title}
        </h2>
        <p className="mt-5 text-xl font-medium leading-8 text-white/78">{item.subtitle}</p>
        {item.description ? (
          <p className="mt-8 max-w-xl text-base leading-8 text-white/70">{item.description}</p>
        ) : null}
        <div className="mt-7 flex flex-wrap gap-2">
          {item.tags?.slice(0, 5).map((tag) => (
            <span className="liquid-glass rounded-full px-3 py-1.5 text-xs font-semibold text-white/82" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link
          className="liquid-glass-strong mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-colors hover:bg-white/15 focus-ring"
          href={`/${section}/${item.slug}`}
        >
          View Details
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </motion.div>

      <motion.div className="relative" style={{ clipPath, opacity }}>
        <div className="liquid-glass-strong relative mx-auto aspect-square w-full max-w-[22rem] overflow-hidden rounded-[2rem] p-8 sm:max-w-[26rem]">
          {item.image.fullBleed ? (
            <Image
              alt={item.image.alt}
              className="object-cover"
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
