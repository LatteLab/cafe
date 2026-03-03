"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { SITE_NAME, NAV_LINKS, LOGIN_LINK, CONTACT_LINK } from "@/lib/constants"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const isHomePage = pathname === "/"
    const isDark = isScrolled || !isHomePage

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white shadow-sm py-3"
                : isHomePage
                    ? "bg-black/30 backdrop-blur-sm py-4"
                    : "bg-brand-primary py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <span className={`text-xl font-medium ${isDark ? "text-brand-dark" : "text-white"}`}>
                        {SITE_NAME}
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`hover:opacity-80 transition-colors ${isDark ? "text-brand-dark" : "text-white"
                                } ${pathname === link.href ? "font-medium" : ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href={LOGIN_LINK.href}
                        className={`hover:opacity-80 transition-colors ${isDark ? "text-brand-dark" : "text-white"}`}
                    >
                        {LOGIN_LINK.label}
                    </a>
                    <Link href={CONTACT_LINK.href}>
                        <Button
                            variant="outline"
                            className={
                                isDark
                                    ? "bg-brand-secondary text-brand-dark hover:bg-opacity-90 border-none"
                                    : "bg-brand-primary text-brand-dark hover:bg-opacity-90 border-none"
                            }
                        >
                            {CONTACT_LINK.label}
                        </Button>
                    </Link>
                </nav>

                <button
                    className={`md:hidden ${isDark ? "text-brand-dark" : "text-white"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 py-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-brand-dark hover:text-brand-dark/70 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href={LOGIN_LINK.href}
                            className="text-brand-dark hover:text-brand-dark/70 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {LOGIN_LINK.label}
                        </a>
                        <Link
                            href={CONTACT_LINK.href}
                            className="text-brand-dark hover:text-brand-dark/70 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {CONTACT_LINK.label}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
