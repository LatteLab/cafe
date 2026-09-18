import { FooterWordmark } from "./footer-wordmark";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="signature-footer">
      <div className="shell signature-inner">
        <div className="signature-invitation">
          <p>See you over coffee.</p>
          <a
            href={site.membershipUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the mailing list <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="signature-art" role="img" aria-label="Latte Lab">
          <FooterWordmark />
        </div>
        <div className="signature-meta">
          <p>Student brewed. MIT, Cambridge.</p>
          <div>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
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
