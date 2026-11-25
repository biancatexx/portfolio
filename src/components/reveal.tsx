import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type From = "up" | "left" | "right";

const hidden: Record<From, string> = {
  up: "translate-y-8",
  left: "-translate-x-12",
  right: "translate-x-12",
};

/**
 * Faz o conteúdo deslizar e aparecer quando entra na tela.
 * Respeita quem pediu menos movimento no sistema (prefers-reduced-motion).
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  from?: From;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        visible ? "translate-x-0 translate-y-0 opacity-100" : cn("opacity-0", hidden[from]),
        className,
      )}
    >
      {children}
    </div>
  );
}
