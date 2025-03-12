"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Footer } from "@/components/footer"
import { HeroSection } from '@/components/hero-section'
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
        <main className="min-h-screen pt-16">
            {/* Hero Section */}
            <HeroSection title="Get in Touch" description="We're here to answer your questions and discuss how Latte Lab can help your organization achieve lasting change." />

            {/* Contact Form and Info Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <FadeIn direction="up" duration={0.6}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">Contact Us</h2>
                                <p className="text-lg text-brand-dark/70 mb-8">
                                    Fill out the form below, and one of our team members will get back to you as soon as possible.
                                </p>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-brand-dark mb-2">
                                                First Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-brand-dark mb-2">
                                                Last Name*
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                                            Email Address*
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-brand-dark mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-brand-dark mb-2">
                                            Subject*
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="services">Services Information</option>
                                            <option value="partnership">Partnership Opportunities</option>
                                            <option value="careers">Careers</option>
                                            <option value="media">Media Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-2">
                                            Message*
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                        ></textarea>
                                    </div>

                                    {/* <div className="flex items-start">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            name="privacy"
                                            required
                                            className="mt-1 mr-2"
                                        />
                                        <label htmlFor="privacy" className="text-sm text-brand-dark/70">
                                            I agree to the{" "}
                                            <Link href="/privacy" className="text-brand-dark underline hover:text-brand-dark/80">
                                                privacy policy
                                            </Link>{" "}
                                            and consent to SR Impact processing my data for the purpose of responding to my inquiry.
                                        </label>
                                    </div> */}

                                    <div>
                                        <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 px-8 py-3">
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="bg-brand-secondary p-8 rounded-sm">
                                <h3 className="text-2xl font-medium mb-6 text-brand-dark">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                                                className="text-brand-dark"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
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
                                                className="text-brand-dark"
                                            >
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
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
                                    <h4 className="text-lg font-medium text-brand-dark mb-4">Connect With Us</h4>
                                    <div className="flex space-x-4">
                                        <a
                                            href="https://www.instagram.com/mitlattelab/#"
                                            className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-primary/80 transition-colors"
                                        >
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
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/mitlattelab/#"
                                            className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-primary/80 transition-colors"
                                        >
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
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section >


            {/* FAQ Section */}
            {/* <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" duration={0.6}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">Frequently Asked Questions</h2>
                            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
                                Find answers to common questions about working with Latte Lab.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQ key={index} {...faq} />
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Footer */}
            <Footer />
        </main >
    )
}
