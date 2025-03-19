"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Footer } from "@/components/footer"
import { HeroSection } from '@/components/hero-section'
import { MapPin, Mail, Instagram, Linkedin } from "lucide-react"
import { useState } from "react"

const faqs = [
    {
        question: "How do I get started with SR Impact?",
        answer: "The first step is to schedule an initial consultation with our team. During this call, we'll discuss your organization's specific challenges and goals, and explore how our services might help. You can request a consultation by filling out the contact form on this page or calling our main office."
    },
    {
        question: "What industries does SR Impact work with?",
        answer: "We work with organizations across a wide range of industries, including technology, healthcare, financial services, manufacturing, retail, education, and nonprofits. Our methodologies are adaptable to different contexts, and our team brings diverse industry experience to each engagement."
    },
    {
        question: "How long does a typical engagement last?",
        answer: "The duration of our engagements varies depending on the scope and complexity of the work. Some focused projects may last 3-6 months, while more comprehensive organizational transformations might span 1-2 years. We work with each client to design an approach that meets their specific needs and timeline."
    },
    {
        question: "Do you offer virtual consulting services?",
        answer: "Yes, we offer both in-person and virtual consulting services. While we believe in the value of face-to-face interaction for certain types of work, we've developed effective approaches for virtual collaboration that can be equally impactful. Our team can work with you to determine the right mix of in-person and virtual engagement for your needs."
    },
    {
        question: "How do you measure the impact of your work?",
        answer: "We work with each client to define clear success metrics at the outset of our engagement. These might include quantitative measures like employee engagement scores, leadership effectiveness ratings, or business performance indicators, as well as qualitative assessments of organizational health and capability. We regularly track progress against these metrics and adjust our approach as needed."
    }
];

interface FAQProps {
    question: string;
    answer: string;
}

function FAQ({ question, answer }: FAQProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-brand-dark">{question}</span>
                <svg
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
            {isOpen && <p className="mt-2 text-brand-dark/70">{answer}</p>}
        </div>
    );
}

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-14">
            {/* Hero Section */}
            <HeroSection title="Get in Touch" description="We're here to answer your questions and discuss how Latte Lab can help your organization achieve lasting change." />

            {/* Contact Information Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" duration={0.6}>
                        <div className="max-w-2xl mx-auto bg-brand-secondary p-8 rounded-sm">
                            <h3 className="text-2xl font-medium mb-6 text-brand-dark text-center">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="text-brand-dark" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-brand-dark mb-2">Headquarters</h4>
                                        <p className="text-brand-dark/70">
                                            6-113, 77 Massachusetts Ave.
                                            <br />
                                            Cambridge, MA 02139
                                            <br />
                                            United States
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="text-brand-dark" size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-brand-dark mb-2">Email</h4>
                                        <Link href="mailto:lattelab-exec@mit.edu" className="text-brand-dark/70">
                                            lattelab-exec@mit.edu
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-brand-dark/10">
                                <h4 className="text-lg font-medium text-brand-dark mb-4 text-center">Connect With Us</h4>
                                <div className="flex justify-center space-x-4">
                                    <a
                                        href="https://www.linkedin.com/company/latte-lab/"
                                        className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-primary/80 transition-colors"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/mitlattelab/#"
                                        className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-primary/80 transition-colors"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}
