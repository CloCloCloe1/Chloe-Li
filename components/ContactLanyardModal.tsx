"use client";

import { motion } from "framer-motion";
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
  useState,
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
  const [flipped, setFlipped] = useState(false);

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
    <div className="fixed inset-0 z-[120] overflow-y-auto bg-black/30 px-4 py-8 backdrop-blur-[2px]">
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
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
        ref={dialogRef}
        role="dialog"
      >
        <motion.div
          animate={{ rotate: 0, scale: 1, y: 0 }}
          className="lanyard-modal relative z-10 w-full max-w-[252px]"
          drag
          dragConstraints={{ bottom: 120, left: -180, right: 180, top: -90 }}
          dragElastic={0.24}
          dragMomentum
          initial={{ opacity: 0, rotate: -7, scale: 0.82, y: -150 }}
          transition={{ damping: 13, mass: 0.7, stiffness: 180, type: "spring" }}
          whileDrag={{ cursor: "grabbing", rotate: 8, scale: 1.04 }}
        >
          <div aria-hidden="true" className="lanyard-anchor" />
          <div aria-hidden="true" className="lanyard-cord">
            <span />
          </div>
          <div className="lanyard-clip liquid-glass" aria-hidden="true" />
          <motion.article
            animate={{ rotateY: flipped ? 180 : 0 }}
            className="lanyard-card liquid-glass-strong text-white"
            transition={{ damping: 18, stiffness: 220, type: "spring" }}
          >
            <button
              aria-label="Close contact card"
              className="lanyard-close-button inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white transition hover:bg-white/20 focus-ring"
              onClick={onClose}
              type="button"
            >
              <X aria-hidden="true" size={18} />
            </button>

            <div className="lanyard-face lanyard-face-front">
              <div className="lanyard-id-header pr-10">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/66">Analyst Profile</span>
              </div>

              <div className="lanyard-photo-frame mt-3 rounded-[1.15rem] bg-white/92 p-2 shadow-2xl">
                <Image
                  alt="Chloe Li portrait"
                  className="h-full w-full rounded-[0.9rem] object-cover object-top"
                  height={800}
                  priority
                  src="/profile/chloe-li-headshot.jpg"
                  width={600}
                />
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold text-[#8ec5ff]">Toronto, ON</p>
                <h2
                  className="mt-1 rounded-xl font-heading text-4xl italic leading-none tracking-normal text-white focus-ring"
                  id="contact-lanyard-title"
                  ref={headingRef}
                  tabIndex={-1}
                >
                  Chloe Li
                </h2>
                <p className="mt-2 text-xs font-light leading-5 text-white/78">
                  Business Analyst / Product Analyst.
                </p>
              </div>

              <div className="mt-4 grid gap-2">
                <ContactLanyardLink href={`tel:${contact.phone}`} icon={<Phone aria-hidden="true" size={14} />} label={contact.phone} />
                <ContactLanyardLink href={`mailto:${contact.email}`} icon={<Mail aria-hidden="true" size={14} />} label={contact.email} />
                <ContactLanyardLink href={contact.linkedin} icon={<Linkedin aria-hidden="true" size={14} />} label="LinkedIn Profile" />
                <ContactLanyardLink href="https://www.google.com/maps/search/?api=1&query=Toronto%2C%20ON" icon={<MapPin aria-hidden="true" size={14} />} label="Toronto, ON" />
              </div>
              <button
                className="mt-3 inline-flex min-h-9 items-center justify-center rounded-full bg-white/10 px-3 text-xs font-semibold text-white transition hover:bg-white/18 focus-ring"
                onClick={() => setFlipped(true)}
                type="button"
              >
                Flip Card
              </button>
            </div>

            <div aria-hidden={!flipped} className="lanyard-face lanyard-face-back">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8ec5ff]">Portfolio Card</p>
              <h3 className="mt-4 font-heading text-4xl italic leading-none text-white">Chloe Li</h3>
              <p className="mt-4 text-xs leading-5 text-white/76">
                Data, product, and business systems work across AI workflows, financial systems, brand analysis, and product operations.
              </p>
              <button
                className="mt-5 inline-flex min-h-9 items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-neutral-950 transition hover:bg-white/88 focus-ring"
                onClick={() => setFlipped(false)}
                type="button"
              >
                Back To Contact
              </button>
            </div>
          </motion.article>
        </motion.div>
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
      className="liquid-glass flex min-h-9 items-center gap-2 rounded-full px-3 text-[0.72rem] font-semibold text-white transition hover:bg-white/14 focus-ring"
      href={href}
      onClick={onClick}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950">
        {icon}
      </span>
      <span className="break-all">{label}</span>
    </a>
  );
}
