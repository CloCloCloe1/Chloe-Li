"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type DisplayCard = {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  date: string;
  tone: string;
  className: string;
};

type DisplayCardsProps = {
  cards: DisplayCard[];
};

export default function DisplayCards({ cards }: DisplayCardsProps) {
  return (
    <div aria-label="Featured experience pages" className="experience-card-stack">
      {cards.map((card) => (
        <Link
          className={`experience-display-card focus-ring ${card.className}`}
          href={card.href}
          key={card.href}
          style={{ ["--card-tone" as string]: card.tone }}
        >
          <span className="flex items-center gap-3">
            <span className="experience-display-icon" aria-hidden="true">
              {card.icon}
            </span>
            <span className="text-lg font-semibold text-white">{card.title}</span>
          </span>
          <span className="block text-base font-medium leading-6 text-white/90">
            {card.description}
          </span>
          <span className="block text-sm font-semibold text-white/70">{card.date}</span>
        </Link>
      ))}
    </div>
  );
}
