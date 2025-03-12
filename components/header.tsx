"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    const isHomePage = pathname === "/"

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
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
                    <span
                        className={`text-xl font-medium ${isScrolled || !isHomePage ? "text-brand-dark" : "text-white"}`}
                    >
                        Latte Lab
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/about"
                        className={`hover:opacity-80 transition-colors ${isScrolled || !isHomePage ? "text-brand-dark" : "text-white"
                            } ${pathname === "/about" ? "font-medium" : ""}`}
                    >
                        About us
                    </Link>
                    <Link
                        href="/news"
                        className={`hover:opacity-80 transition-colors ${isScrolled || !isHomePage ? "text-brand-dark" : "text-white"
                            } ${pathname === "/news" ? "font-medium" : ""}`}
                    >
                        News
                    </Link>
                    <Link href="/contact">
                        <Button
                            variant="outline"
                            className={
                                isScrolled || !isHomePage
                                    ? "bg-brand-secondary text-brand-dark hover:bg-opacity-90 border-none"
                                    : "bg-brand-primary text-brand-dark hover:bg-opacity-90 border-none"
                            }
                        >
                            Contact us
                        </Button>
                    </Link>
                </nav>

                <button
                    className={`md:hidden ${isScrolled || !isHomePage ? "text-brand-dark" : "text-white"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-full left-0 right-0 py-4">
                    <nav className="flex flex-col items-center space-y-4">
                        <Link
                            href="/about"
                            className="text-brand-dark hover:text-brand-dark/70 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            About us
                        </Link>
                        <Link
                            href="/news"
                            className="text-brand-dark hover:text-brand-dark/70 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            News
                        </Link>
                        <Link
                            href="/contact"
                            className="text-brand-dark hover:text-brand-dark/70 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact us
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
