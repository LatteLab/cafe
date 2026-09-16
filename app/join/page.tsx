import type { Metadata } from "next";
import { CoffeeArt } from "@/components/coffee-art";
import { site } from "@/content/site";
export const metadata: Metadata = {
  title: "Join the club",
  description:
    "Find your way into Latte Lab: club membership, team applications, Instagram, and contact details.",
  alternates: { canonical: "/join" },
};
function FormLink({
  href,
  label,
  description,
  secondary = false,
}: {
  href: string | null;
  label: string;
  description: string;
  secondary?: boolean;
}) {
  return (
    <div className="join-link">
      {href ? (
        <a
          className={`button ${secondary ? "button-outline" : ""}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label} <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <button
          className={`button ${secondary ? "button-outline" : ""}`}
          disabled
          aria-describedby={secondary ? "application-note" : "membership-note"}
        >
          {label} <span aria-hidden="true">↗</span>
        </button>
      )}
      <p id={secondary ? "application-note" : "membership-note"}>
        {description}
        {!href && <span className="coming-soon">Link coming soon</span>}
      </p>
    </div>
  );
}
export default function Join() {
  return (
    <main id="main" className="shell join-page">
      <CoffeeArt small />
      <section className="join-content">
        <p className="eyebrow">GOOD COMPANY STARTS HERE</p>
        <h1>
          Pull up
          <br />a <em>chair.</em>
        </h1>
        <p className="intro-copy">Find your way into Latte Lab.</p>
        <div className="join-links">
          <FormLink
            href={site.membershipUrl}
            label="Membership form"
            description="Join the community."
          />
          <FormLink
            href={site.applicationUrl}
            label="Club application"
            description="Help make it happen."
            secondary
          />
        </div>
        <div className="join-socials">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${site.email}`}>Email us ↗</a>
        </div>
      </section>
    </main>
  );
}
