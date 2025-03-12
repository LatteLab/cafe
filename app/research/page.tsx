import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Footer } from "@/components/footer"
import { HeroSection } from '@/components/hero-section'

export default function ResearchPage() {
    return (
        <main className="min-h-screen pt-14">
            <HeroSection title="Research & Insights" description="Exploring the future of leadership, organizational development, and sustainable business practices through rigorous research and practical insights." />

            {/* Featured Research Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" duration={0.6}>
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-brand-dark">Featured Research</h2>
                            <p className="text-lg text-brand-dark/70 max-w-2xl">
                                Our latest groundbreaking study on leadership effectiveness in rapidly changing environments.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="up" duration={0.6} delay={0.1}>
                            <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=500&width=600"
                                    alt="Leadership research visualization"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </FadeIn>
                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div>
                                <span className="inline-block px-3 py-1 bg-brand-secondary text-brand-dark/70 text-sm mb-4">
                                    Leadership Development
                                </span>
                                <h3 className="text-2xl md:text-3xl font-medium mb-4 text-brand-dark">
                                    Adaptive Leadership in the Age of Uncertainty
                                </h3>
                                <div className="space-y-4 text-brand-dark/80 mb-6">
                                    <p>
                                        This comprehensive study examines how effective leaders navigate complex, uncertain environments
                                        while maintaining team cohesion and driving innovation.
                                    </p>
                                    <p>
                                        Through a mixed-methods approach involving 250+ global executives across 12 industries, we've
                                        identified key patterns and practices that distinguish high-performing leaders in volatile contexts.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2">
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
                                            className="text-brand-dark/60"
                                        >
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        <span className="text-brand-dark/70">Published: March 2024</span>
                                    </div>
                                    <div className="flex items-center gap-2">
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
                                            className="text-brand-dark/60"
                                        >
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                        <span className="text-brand-dark/70">Lead Researchers: Dr. Sarah Johnson, Michael Chen</span>
                                    </div>
                                </div>
                                <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">Read Full Report</Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Research Projects Section */}
            <section className="py-16 md:py-24 bg-brand-secondary">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" duration={0.6}>
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-medium mb-4 text-brand-dark">Research Projects</h2>
                            <p className="text-lg text-brand-dark/70 max-w-2xl">
                                Explore our diverse portfolio of research initiatives across leadership, organizational development, and
                                sustainable business practices.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" duration={0.6} delay={0.1}>
                        <div className="flex flex-wrap gap-4 mb-12">
                            <Button
                                variant="outline"
                                className="bg-brand-primary text-brand-dark border-brand-primary hover:bg-brand-primary/80"
                            >
                                All Projects
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-transparent text-brand-dark border-brand-dark/30 hover:bg-brand-primary/10"
                            >
                                Leadership
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-transparent text-brand-dark border-brand-dark/30 hover:bg-brand-primary/10"
                            >
                                Organizational Culture
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-transparent text-brand-dark border-brand-dark/30 hover:bg-brand-primary/10"
                            >
                                Sustainability
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-transparent text-brand-dark border-brand-dark/30 hover:bg-brand-primary/10"
                            >
                                Innovation
                            </Button>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <FadeIn direction="up" duration={0.6} delay={0.1}>
                            <div className="bg-white rounded-sm overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Future of Work research"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-primary text-brand-dark/80 text-sm">
                                        Leadership
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-medium mb-3 text-brand-dark group-hover:text-brand-dark/80 transition-colors">
                                        The Future of Work: Leadership in Hybrid Environments
                                    </h3>
                                    <p className="text-brand-dark/70 mb-4 line-clamp-3">
                                        Examining how effective leaders are adapting their approaches to manage distributed teams and hybrid
                                        work models in the post-pandemic era.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-brand-dark/60">February 2024</span>
                                        <Link
                                            href="/research/future-of-work"
                                            className="text-brand-dark font-medium flex items-center gap-1 group-hover:text-brand-dark/80 transition-colors"
                                        >
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-transform group-hover:translate-x-1"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Project 2 */}
                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="bg-white rounded-sm overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Sustainable Business Practices"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-primary text-brand-dark/80 text-sm">
                                        Sustainability
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-medium mb-3 text-brand-dark group-hover:text-brand-dark/80 transition-colors">
                                        ESG Integration: Beyond Compliance to Competitive Advantage
                                    </h3>
                                    <p className="text-brand-dark/70 mb-4 line-clamp-3">
                                        Analyzing how leading organizations are transforming ESG commitments from compliance requirements
                                        into sources of innovation and market differentiation.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-brand-dark/60">January 2024</span>
                                        <Link
                                            href="/research/esg-integration"
                                            className="text-brand-dark font-medium flex items-center gap-1 group-hover:text-brand-dark/80 transition-colors"
                                        >
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-transform group-hover:translate-x-1"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Project 3 */}
                        <FadeIn direction="up" duration={0.6} delay={0.3}>
                            <div className="bg-white rounded-sm overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Organizational Culture"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-primary text-brand-dark/80 text-sm">
                                        Organizational Culture
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-medium mb-3 text-brand-dark group-hover:text-brand-dark/80 transition-colors">
                                        Building Resilient Cultures: Adaptability in Uncertain Times
                                    </h3>
                                    <p className="text-brand-dark/70 mb-4 line-clamp-3">
                                        Investigating the cultural attributes that enable organizations to thrive amid disruption, based on
                                        case studies of companies that successfully navigated recent global challenges.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-brand-dark/60">December 2023</span>
                                        <Link
                                            href="/research/resilient-cultures"
                                            className="text-brand-dark font-medium flex items-center gap-1 group-hover:text-brand-dark/80 transition-colors"
                                        >
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-transform group-hover:translate-x-1"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Project 4 */}
                        <FadeIn direction="up" duration={0.6} delay={0.1}>
                            <div className="bg-white rounded-sm overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Innovation Research"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-primary text-brand-dark/80 text-sm">
                                        Innovation
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-medium mb-3 text-brand-dark group-hover:text-brand-dark/80 transition-colors">
                                        Democratizing Innovation: Inclusive Approaches to Problem-Solving
                                    </h3>
                                    <p className="text-brand-dark/70 mb-4 line-clamp-3">
                                        Exploring how organizations can tap into diverse perspectives and collective intelligence to drive
                                        breakthrough innovations and solve complex challenges.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-brand-dark/60">November 2023</span>
                                        <Link
                                            href="/research/democratizing-innovation"
                                            className="text-brand-dark font-medium flex items-center gap-1 group-hover:text-brand-dark/80 transition-colors"
                                        >
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-transform group-hover:translate-x-1"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Project 5 */}
                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="bg-white rounded-sm overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Digital Transformation"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-primary text-brand-dark/80 text-sm">
                                        Leadership
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-medium mb-3 text-brand-dark group-hover:text-brand-dark/80 transition-colors">
                                        Leading Digital Transformation: Human-Centered Approaches
                                    </h3>
                                    <p className="text-brand-dark/70 mb-4 line-clamp-3">
                                        Examining how successful digital transformations balance technological innovation with human
                                        factors, focusing on leadership practices that drive adoption and value creation.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-brand-dark/60">October 2023</span>
                                        <Link
                                            href="/research/digital-transformation"
                                            className="text-brand-dark font-medium flex items-center gap-1 group-hover:text-brand-dark/80 transition-colors"
                                        >
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-transform group-hover:translate-x-1"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Project 6 */}
                        <FadeIn direction="up" duration={0.6} delay={0.3}>
                            <div className="bg-white rounded-sm overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src="/placeholder.svg?height=300&width=500"
                                        alt="Sustainable Supply Chains"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-primary text-brand-dark/80 text-sm">
                                        Sustainability
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-medium mb-3 text-brand-dark group-hover:text-brand-dark/80 transition-colors">
                                        Reimagining Supply Chains: Resilience and Sustainability
                                    </h3>
                                    <p className="text-brand-dark/70 mb-4 line-clamp-3">
                                        Analyzing how organizations are redesigning supply chains to balance resilience, sustainability, and
                                        efficiency in response to global disruptions and climate imperatives.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-brand-dark/60">September 2023</span>
                                        <Link
                                            href="/research/supply-chains"
                                            className="text-brand-dark font-medium flex items-center gap-1 group-hover:text-brand-dark/80 transition-colors"
                                        >
                                            Read More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="transition-transform group-hover:translate-x-1"
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn direction="up" duration={0.6} delay={0.4}>
                        <div className="mt-12 text-center">
                            <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                                View All Research Projects
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Research Methodology Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="up" duration={0.6}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">Our Research Methodology</h2>
                                <div className="space-y-4 text-brand-dark/80">
                                    <p>
                                        At SR Impact, we believe that rigorous research is the foundation for effective leadership and
                                        organizational development. Our approach combines academic rigor with practical relevance to deliver
                                        insights that drive real-world impact.
                                    </p>
                                    <p>
                                        We employ a mixed-methods approach that integrates quantitative and qualitative research techniques,
                                        including:
                                    </p>
                                    <ul className="space-y-2 pl-5 list-disc">
                                        <li>Large-scale surveys across diverse industries and geographies</li>
                                        <li>In-depth interviews with executives and thought leaders</li>
                                        <li>Longitudinal case studies of organizational transformation</li>
                                        <li>Experimental research to test leadership interventions</li>
                                        <li>Data analytics to identify patterns and correlations</li>
                                    </ul>
                                    <p>
                                        All our research undergoes rigorous peer review and is guided by our commitment to ethical research
                                        practices and data privacy.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=500&width=600"
                                    alt="Research methodology visualization"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Collaboration CTA Section */}
            <section className="py-16 md:py-24 bg-brand-primary">
                <div className="container mx-auto px-4 text-center">
                    <FadeIn direction="up" duration={0.6}>
                        <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">Collaborate on Research</h2>
                        <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto mb-8">
                            We're always looking for research partners and participants. Join us in advancing knowledge and practice
                            in leadership and organizational development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-brand-dark text-white hover:bg-brand-dark/90">Become a Research Partner</Button>
                            <Button variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark/10">
                                Participate in a Study
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}

