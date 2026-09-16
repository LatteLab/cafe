import type { Metadata } from "next";
import Link from "next/link";
import { CoffeeArt } from "@/components/coffee-art";
import { Polaroid } from "@/components/polaroid";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <main id="main" className="home shell">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-star">✳</span> GOOD COFFEE. GREAT COMPANY.
          </p>
          <h1>
            Coffee tastes
            <br />
            better <em>together.</em>
          </h1>
          <p className="hero-description">
            A student-run coffee club bringing people
            <br className="desktop-break" /> together across MIT.
          </p>
          <div className="hero-actions">
            <Link href="/join" className="button">
              Join Latte Lab <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/scrapbook" className="text-link">
              Open our scrapbook <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <CoffeeArt />
      </section>
      <section
        className="home-memories"
        aria-label="A few moments at Latte Lab"
      >
        <div className="mini-polaroids">
          <Link
            href="/scrapbook"
            aria-label="See campus pop-ups in the scrapbook"
          >
            <Polaroid
              src="/photos/blueprint-6.webp"
              alt="Club members serving coffee at Blueprint"
              caption="around campus"
              rotation={-5}
            />
          </Link>
          <Link href="/scrapbook" aria-label="See drinks in the scrapbook">
            <Polaroid
              src="/photos/saas-1.webp"
              alt="A latte decorated with rose petals"
              caption="made with love"
              rotation={4}
            />
          </Link>
          <Link
            href="/scrapbook"
            aria-label="See club socials in the scrapbook"
          >
            <Polaroid
              src="/photos/social-2.webp"
              alt="Friends chatting at a club social"
              caption="good company"
              rotation={-3}
            />
          </Link>
        </div>
        <div className="memory-note">
          <span aria-hidden="true">⤶</span>
          <p className="handwritten">
            A few moments,
            <br />
            freshly brewed.
          </p>
        </div>
        <p className="home-footnote">
          Come for a cup.
          <br />
          <strong>Stay for the people.</strong>
        </p>
      </section>
    </main>
  );
}
