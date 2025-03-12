"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
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
                    {/* <div className="w-8 h-8">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-full h-full ${isScrolled || !isHomePage ? "text-brand-dark" : "text-white"}`}
                        >
                            <path
                                d="M12 2L2 7L12 12L22 7L12 2Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="currentColor"
                            />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                        </svg>
                    </div> */}
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
                    {/* <Link
                        href="/services"
                        className={`hover:opacity-80 transition-colors ${isScrolled || !isHomePage ? "text-brand-dark" : "text-white"
                            } ${pathname.startsWith("/services") ? "font-medium" : ""}`}
                    >
                        Services
                    </Link>
                    <Link
                        href="/research"
                        className={`hover:opacity-80 transition-colors ${isScrolled || !isHomePage ? "text-brand-dark" : "text-white"
                            } ${pathname === "/clients" ? "font-medium" : ""}`}
                    >
                        Research
                    </Link> */}
                    <Link
                        href="/news"
                        className={`hover:opacity-80 transition-colors ${isScrolled || !isHomePage ? "text-brand-dark" : "text-white"
                            } ${pathname === "/startups" ? "font-medium" : ""}`}
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

                <Button
                    variant="ghost"
                    className={`md:hidden ${isScrolled || !isHomePage ? "text-brand-dark" : "text-white"}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </Button>
            </div>
        </header>
    )
}
