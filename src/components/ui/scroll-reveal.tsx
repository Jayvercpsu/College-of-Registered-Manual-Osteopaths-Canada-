"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hook for triggering animations when elements enter the viewport.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}

/**
 * Wrapper component that adds scroll-reveal functionality to any child element.
 * Usage: <ScrollReveal className="reveal-on-scroll">...</ScrollReveal>
 */
export function ScrollReveal({
  children,
  className,
  as: Component = "div",
  ...props
}: React.HTMLAttributes<HTMLElement> & { as?: React.ElementType }) {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();
  const combinedClass = [className, isVisible ? "is-visible" : ""]
    .filter(Boolean)
    .join(" ");

  return <Component ref={ref} className={combinedClass} {...props}>{children}</Component>;
}

/**
 * Hook for staggered animations - returns an array of refs and visibility states
 */
export function useStaggeredReveal<T extends HTMLElement>(
  count: number,
  options?: IntersectionObserverInit
): [React.RefObject<T | null>[], boolean[]] {
  const refs = useRef<React.RefObject<T | null>[]>(
    Array.from({ length: count }, () => useRef<T>(null))
  );
  const [visible, setVisible] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisible(Array(count).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.findIndex((ref) => ref.current === entry.target);
            if (index !== -1 && !visible[index]) {
              setVisible((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
        ...options,
      }
    );

    refs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [visible, options]);

  return [refs.current, visible];
}