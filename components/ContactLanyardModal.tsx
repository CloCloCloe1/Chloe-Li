"use client";

import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X
} from "lucide-react";
import Image from "next/image";
import {
  useEffect,
  useRef,
  type ReactNode,
  type RefObject
} from "react";
import { contact } from "@/lib/profile";

type ContactLanyardModalProps = {
  open: boolean;
  onClose: () => void;
  returnFocusRef?: RefObject<HTMLButtonElement | null>;
};

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

export default function ContactLanyardModal({
  open,
  onClose,
  returnFocusRef
}: ContactLanyardModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const returnFocusElement = returnFocusRef?.current;
    document.body.style.overflow = "hidden";
    headingRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (element) => !element.hasAttribute("disabled") && element.offsetParent !== null
      );

      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusElement?.focus();
    };
  }, [onClose, open, returnFocusRef]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] overflow-y-auto bg-black/74 px-4 py-8 backdrop-blur-xl">
      <button
        aria-label="Close contact card"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
        type="button"
      />
      <div
        aria-labelledby="contact-lanyard-title"
        aria-modal="true"
        className="lanyard-wrapper"
        ref={dialogRef}
        role="dialog"
      >
        <div className="lanyard-modal relative z-10 w-full max-w-[430px]">
          <div aria-hidden="true" className="lanyard-anchor" />
          <div aria-hidden="true" className="lanyard-cord">
            <span />
            <span />
          </div>
          <div aria-hidden="true" className="lanyard-band">
            <span>CHLOE LI</span>
          </div>
          <div className="lanyard-clip liquid-glass" aria-hidden="true" />
          <article className="lanyard-card liquid-glass-strong text-white">
            <button
              aria-label="Close contact card"
              className="lanyard-close-button inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20 focus-ring"
              onClick={onClose}
              type="button"
            >
              <X aria-hidden="true" size={18} />
            </button>

            <div className="lanyard-id-header">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/58">Analyst Portfolio</span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-950">Contact</span>
            </div>

            <div className="lanyard-photo-frame mt-5 rounded-[1.5rem] bg-white/92 p-3 shadow-2xl">
              <Image
                alt="Chloe Li portrait"
                className="h-full w-full rounded-[1.25rem] object-cover object-top"
                height={720}
                priority
                src="/profile/chloe-li-headshot.jpg"
                width={576}
              />
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-[#8ec5ff]">Toronto, ON</p>
              <h2
                className="mt-2 rounded-xl font-heading text-5xl italic leading-none tracking-normal text-white focus-ring"
                id="contact-lanyard-title"
                ref={headingRef}
                tabIndex={-1}
              >
                Chloe Li
              </h2>
              <p className="mt-3 text-sm font-light leading-6 text-white/78">
                Business Analyst / Product Analyst.
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              <ContactLanyardLink href={`tel:${contact.phone}`} icon={<Phone aria-hidden="true" size={18} />} label={contact.phone} />
              <ContactLanyardLink href={`mailto:${contact.email}`} icon={<Mail aria-hidden="true" size={18} />} label={contact.email} />
              <ContactLanyardLink href={contact.linkedin} icon={<Linkedin aria-hidden="true" size={18} />} label="LinkedIn Profile" />
              <ContactLanyardLink href="https://www.google.com/maps/search/?api=1&query=Toronto%2C%20ON" icon={<MapPin aria-hidden="true" size={18} />} label="Toronto, ON" />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

function ContactLanyardLink({
  href,
  icon,
  label,
  onClick
}: {
  href: string;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a
      className="liquid-glass flex min-h-12 items-center gap-3 rounded-full px-4 text-sm font-semibold text-white transition hover:bg-white/14 focus-ring"
      href={href}
      onClick={onClick}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950">
        {icon}
      </span>
      <span className="break-all">{label}</span>
    </a>
  );
}
