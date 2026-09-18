import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
export const metadata: Metadata = {
  title: "Join",
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
      <Image
        className="join-member-seal"
        src="/brand/member-wax-seal.webp"
        alt="Green Latte Lab member wax-seal sticker with a beaver emblem"
        width={1000}
        height={1000}
        sizes="(max-width: 760px) 280px, 480px"
        preload
      />
      <section className="join-content">
        <h1 className="join-heading">Find your way into Latte Lab.</h1>
        <div className="join-links">
          <FormLink
            href={site.membershipUrl}
            label="Join the membership mailing list"
            description="Stay in the loop on coffee, events, and club updates."
          />
          <FormLink
            href={site.applicationUrl}
            label="Apply to the club team"
            description="Help bring Latte Lab events and ideas to life."
            secondary
          />
        </div>
        <div className="join-socials">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${site.email}`}>Email us ↗</a>
        </div>
      </section>
    </main>
  );
}
