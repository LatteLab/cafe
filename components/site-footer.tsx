import { site } from "@/content/site";
export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <p>
        <span className="footer-dot" /> Student brewed. MIT, Cambridge.
      </p>
      <div>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">
          Instagram <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href={`mailto:${site.email}`}>
          Email us <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
