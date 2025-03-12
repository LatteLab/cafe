import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-brand-primary text-brand-dark">
            <div className="container mx-auto px-4 py-12 md:py-16 flex justify-between">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-medium">LatteLab</span>
                        </Link>
                        <p className="text-sm text-brand-dark/70 mb-6 max-w-xs">
                            Uniting science, community, and coffee to spark innovation and disrupt the industry.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/mitlattelab/#" className="text-brand-dark hover:text-brand-dark/70 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/mitlattelab/#" className="text-brand-dark hover:text-brand-dark/70 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-24 ml-auto">
                    <div>
                        <h3 className="text-lg font-medium mb-4">Organization</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-brand-dark/70 hover:text-brand-dark transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-brand-dark/70 hover:text-brand-dark transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/research" className="text-brand-dark/70 hover:text-brand-dark transition-colors">
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-brand-dark/70 hover:text-brand-dark transition-colors">
                                    News
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mt-0.5"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <span className="text-brand-dark/70">
                                    6-113, 77 Massachusetts Ave.
                                    <br />
                                    Cambridge, MA 02139
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <a href="mailto:lattelab-exec@mit.edu" className="text-brand-dark/70">lattelab-exec@mit.edu</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
