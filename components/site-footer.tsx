"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/content/site";

export function SiteFooter() {
  const artwork = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = artwork.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="signature-footer">
      <div className="shell signature-inner">
        <div className="signature-invitation">
          <p>See you over coffee.</p>
          <Link href="/join">
            Join us <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div
          ref={artwork}
          className="signature-art"
          role="img"
          aria-label="Latte Lab"
        >
          <span className="signature-ink" aria-hidden="true" />
        </div>
        <div className="signature-meta">
          <p>Student brewed. MIT, Cambridge.</p>
          <div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={`mailto:${site.email}`}>
              Email us <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
