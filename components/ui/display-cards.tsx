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
          <span className="experience-card-header flex items-center gap-3">
            <span className="experience-display-icon" aria-hidden="true">
              {card.icon}
            </span>
            <span className="experience-card-title">{card.title}</span>
          </span>
          <span className="experience-card-body">
            <span className="experience-card-kicker">{card.date}</span>
            <span className="experience-card-main">{card.title}</span>
            <span className="experience-card-copy">{card.description}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
