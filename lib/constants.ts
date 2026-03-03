export const SITE_NAME = "Latte Lab"

export const NAV_LINKS = [
  { label: "About us", href: "/about" },
  { label: "News", href: "/news" },
] as const

export const LOGIN_LINK = {
  label: "Log in",
  href: "https://app.lattelab.org/",
} as const

export const CONTACT_LINK = {
  label: "Contact us",
  href: "/contact",
} as const

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/latte-lab/",
  instagram: "https://www.instagram.com/mitlattelab/",
} as const

export const CONTACT_INFO = {
  email: "lattelab-exec@mit.edu",
  address: {
    line1: "6-113, 77 Massachusetts Ave.",
    line2: "Cambridge, MA 02139",
  },
} as const
