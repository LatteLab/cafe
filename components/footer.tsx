import Link from "next/link"
import { MapPin, Mail, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-brand-primary text-brand-dark">
            <div className="container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-medium">Latte Lab</span>
                        </Link>
                        <p className="text-sm text-brand-dark/70 mb-6 max-w-xs">
                            Uniting science, community, and coffee to spark innovation and disrupt the industry.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/latte-lab/" className="text-brand-dark hover:text-brand-dark/70 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/mitlattelab/#" className="text-brand-dark hover:text-brand-dark/70 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 md:flex-row md:gap-24">
                    <div className="mt-8 md:mt-0">
                        <h3 className="text-lg font-medium mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-0.5" size={18} />
                                <span className="text-brand-dark/70">
                                    6-113, 77 Massachusetts Ave.
                                    <br />
                                    Cambridge, MA 02139
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18} />
                                <a href="mailto:lattelab-exec@mit.edu" className="text-brand-dark/70">lattelab-exec@mit.edu</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
