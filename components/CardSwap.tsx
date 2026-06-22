"use client";

import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode
} from "react";
import gsap from "gsap";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  customClass?: string;
};

type CardSwapProps = {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  skewAmount?: number;
  easing?: "linear" | "elastic";
};

type Slot = {
  x: number;
  y: number;
  z: number;
  zIndex: number;
};

const makeSlot = (index: number, distanceX: number, distanceY: number, total: number): Slot => ({
  x: index * distanceX,
  y: -index * distanceY,
  z: -index * distanceX * 1.5,
  zIndex: total - index
});

const placeNow = (element: HTMLDivElement, slot: Slot, skewAmount: number) => {
  gsap.set(element, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skewAmount,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true
  });
};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, className, ...rest }, ref) => (
  <div className={`card-swap-card ${customClass ?? ""} ${className ?? ""}`.trim()} ref={ref} {...rest} />
));

Card.displayName = "Card";

export default function CardSwap({
  children,
  width = 430,
  height = 310,
  cardDistance = 48,
  verticalDistance = 58,
  delay = 4300,
  pauseOnHover = true,
  skewAmount = 4,
  easing = "elastic"
}: CardSwapProps) {
  const childArray = useMemo(() => Children.toArray(children), [children]);
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const order = useRef(Array.from({ length: childArray.length }, (_, index) => index));
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      reducedMotionRef.current = mediaQuery.matches;
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const elements = refs.current.filter(Boolean) as HTMLDivElement[];

    if (!elements.length) {
      return;
    }

    const config =
      easing === "elastic"
        ? {
            ease: "elastic.out(0.55,0.85)",
            dropDuration: 1.7,
            moveDuration: 1.7,
            returnDuration: 1.7,
            promoteOverlap: 0.86,
            returnDelay: 0.08
          }
        : {
            ease: "power1.inOut",
            dropDuration: 0.75,
            moveDuration: 0.75,
            returnDuration: 0.75,
            promoteOverlap: 0.45,
            returnDelay: 0.2
          };

    const resetPlacement = () => {
      elements.forEach((element, index) => {
        placeNow(element, makeSlot(index, cardDistance, verticalDistance, elements.length), skewAmount);
      });
    };

    const clearSwapInterval = () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const swap = () => {
      if (reducedMotionRef.current || order.current.length < 2) {
        return;
      }

      const [front, ...rest] = order.current;
      const frontElement = refs.current[front];

      if (!frontElement) {
        return;
      }

      const timeline = gsap.timeline();
      timelineRef.current = timeline;

      timeline.to(frontElement, {
        y: "+=420",
        duration: config.dropDuration,
        ease: config.ease
      });

      timeline.addLabel("promote", `-=${config.dropDuration * config.promoteOverlap}`);

      rest.forEach((index, slotIndex) => {
        const element = refs.current[index];

        if (!element) {
          return;
        }

        const slot = makeSlot(slotIndex, cardDistance, verticalDistance, elements.length);

        timeline.set(element, { zIndex: slot.zIndex }, "promote");
        timeline.to(
          element,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.moveDuration,
            ease: config.ease
          },
          `promote+=${slotIndex * 0.12}`
        );
      });

      const backSlot = makeSlot(elements.length - 1, cardDistance, verticalDistance, elements.length);
      timeline.addLabel("return", `promote+=${config.moveDuration * config.returnDelay}`);
      timeline.call(() => gsap.set(frontElement, { zIndex: backSlot.zIndex }), undefined, "return");
      timeline.to(
        frontElement,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.returnDuration,
          ease: config.ease
        },
        "return"
      );
      timeline.call(() => {
        order.current = [...rest, front];
      });
    };

    resetPlacement();

    if (!reducedMotionRef.current) {
      swap();
      intervalRef.current = window.setInterval(swap, delay);
    }

    const node = containerRef.current;
    const pause = () => {
      timelineRef.current?.pause();
      clearSwapInterval();
    };
    const resume = () => {
      timelineRef.current?.play();
      clearSwapInterval();
      if (!reducedMotionRef.current) {
        intervalRef.current = window.setInterval(swap, delay);
      }
    };

    if (pauseOnHover && node) {
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
    }

    return () => {
      if (pauseOnHover && node) {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
      }

      clearSwapInterval();
      timelineRef.current?.kill();
    };
  }, [cardDistance, childArray.length, delay, easing, pauseOnHover, skewAmount, verticalDistance]);

  return (
    <div
      aria-label="Featured portfolio sections"
      className="card-swap-container"
      ref={containerRef}
      role="group"
      style={{ width, height }}
    >
      {childArray.map((child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        const element = child as ReactElement<{ style?: CSSProperties }>;

        return cloneElement(element, {
          key: index,
          ref: (node: HTMLDivElement | null) => {
            refs.current[index] = node;
          },
          style: { width, height, ...element.props.style }
        } as Partial<{ ref: (node: HTMLDivElement | null) => void; style: CSSProperties }>);
      })}
    </div>
  );
}
