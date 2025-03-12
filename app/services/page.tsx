import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Footer } from "@/components/footer"
import { HeroSection } from '@/components/hero-section'

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-14">
            <HeroSection title="Our Services" description="We provide strategic guidance and support to help leaders and organizations create lasting positive change." />

            {/* Services Overview Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" duration={0.6}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">How We Help</h2>
                            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
                                Our focused support to leaders makes a significant difference, especially during fast growth phases and
                                periods of organizational change.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service Category 1 */}
                        <FadeIn direction="up" duration={0.6} delay={0.1}>
                            <div className="group">
                                <div className="aspect-square relative mb-6 overflow-hidden rounded-sm">
                                    <Image
                                        src="/placeholder.svg?height=600&width=600"
                                        alt="Leadership Development"
                                        width={600}
                                        height={600}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">Learn More</Button>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium mb-2 text-brand-dark">
                                    Leadership &<br />
                                    Development
                                </h3>
                                <p className="text-brand-dark/70">
                                    We help leaders at all levels develop the mindsets, skills, and behaviors needed to drive
                                    organizational success in complex, rapidly changing environments.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Service Category 2 */}
                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="group">
                                <div className="aspect-square relative mb-6 overflow-hidden rounded-sm">
                                    <Image
                                        src="/placeholder.svg?height=600&width=600"
                                        alt="Organizational Design"
                                        width={600}
                                        height={600}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">Learn More</Button>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium mb-2 text-brand-dark">
                                    People, Order Design &<br />
                                    Ways of Working
                                </h3>
                                <p className="text-brand-dark/70">
                                    We design organizational structures, processes, and ways of working that enable high performance,
                                    innovation, and adaptability in the face of change.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Service Category 3 */}
                        <FadeIn direction="up" duration={0.6} delay={0.3}>
                            <div className="group">
                                <div className="aspect-square relative mb-6 overflow-hidden rounded-sm">
                                    <Image
                                        src="/placeholder.svg?height=600&width=600"
                                        alt="Culture Transformation"
                                        width={600}
                                        height={600}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">Learn More</Button>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-medium mb-2 text-brand-dark">
                                    Culture, Mentoring &<br />
                                    Development
                                </h3>
                                <p className="text-brand-dark/70">
                                    We help organizations build and sustain cultures that foster engagement, inclusion, innovation, and
                                    high performance aligned with strategic objectives.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Leadership Development Section */}
            <section className="py-16 md:py-24 bg-brand-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="up" duration={0.6}>
                            <div>
                                <span className="inline-block px-3 py-1 bg-brand-primary text-brand-dark/70 text-sm mb-4">
                                    Leadership Development
                                </span>
                                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">
                                    Developing Leaders for the Future
                                </h2>
                                <div className="space-y-4 text-brand-dark/80">
                                    <p>
                                        In today's complex, rapidly changing business environment, effective leadership is more
                                        important—and more challenging—than ever. Our leadership development programs help leaders at all
                                        levels build the mindsets, skills, and behaviors needed to drive organizational success.
                                    </p>
                                    <p>
                                        We take a holistic approach to leadership development, addressing both the "what" and the "how" of
                                        leadership—the strategic capabilities needed to make sound decisions and the interpersonal skills
                                        required to engage and inspire others.
                                    </p>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-brand-dark"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-brand-dark mb-1">Executive Coaching</h4>
                                            <p className="text-brand-dark/70">
                                                One-on-one coaching to help senior leaders navigate complex challenges, develop their leadership
                                                style, and maximize their impact.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-brand-dark"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-brand-dark mb-1">Leadership Programs</h4>
                                            <p className="text-brand-dark/70">
                                                Customized development programs for leadership teams and high-potential talent, combining
                                                workshops, coaching, and applied learning.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-brand-dark"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-brand-dark mb-1">Team Effectiveness</h4>
                                            <p className="text-brand-dark/70">
                                                Facilitated sessions to help leadership teams align on strategy, improve collaboration, and
                                                enhance their collective impact.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                                        Learn More About Leadership Development
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="relative h-[500px] rounded-sm overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=500&width=600"
                                    alt="Leadership Development"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Organizational Design Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="up" duration={0.6} delay={0.2} className="order-2 md:order-1">
                            <div className="relative h-[500px] rounded-sm overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=500&width=600"
                                    alt="Organizational Design"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" duration={0.6} className="order-1 md:order-2">
                            <div>
                                <span className="inline-block px-3 py-1 bg-brand-primary text-brand-dark/70 text-sm mb-4">
                                    Organizational Design
                                </span>
                                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">
                                    Designing Organizations for Performance and Adaptability
                                </h2>
                                <div className="space-y-4 text-brand-dark/80">
                                    <p>
                                        In today's fast-paced, complex business environment, organizational design is a critical enabler of
                                        strategy execution. We help organizations design structures, processes, and ways of working that
                                        enable high performance, innovation, and adaptability.
                                    </p>
                                    <p>
                                        Our approach to organizational design goes beyond traditional org charts to address the full
                                        spectrum of factors that shape how work gets done—from formal structures and processes to informal
                                        networks, decision rights, and cultural norms.
                                    </p>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-brand-dark"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-brand-dark mb-1">Organizational Assessment</h4>
                                            <p className="text-brand-dark/70">
                                                Comprehensive analysis of current organizational structures, processes, and capabilities to
                                                identify strengths and opportunities for improvement.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-brand-dark"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-brand-dark mb-1">Operating Model Design</h4>
                                            <p className="text-brand-dark/70">
                                                Development of clear, effective operating models that align structure, processes, governance,
                                                and culture with strategic objectives.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-brand-dark"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-brand-dark mb-1">Agile Transformation</h4>
                                            <p className="text-brand-dark/70">
                                                Support for organizations adopting agile ways of working, from initial pilots to enterprise-wide
                                                transformation.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                                        Learn More About Organizational Design
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Culture Transformation Section */}
            <section className="py-16 md:py-24 bg-brand-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="up" duration={0.6}>
                            <div>
                                <span className="inline-block px-3 py-1 bg-brand-primary text-brand-dark/70 text-sm mb-4">
                                    Culture Transformation
                                </span>
                                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">
                                    Building Cultures That Drive Performance
                                </h2>
                                <div className="space-y-4 text-brand-dark/80">
                                    <p>
                                        Culture is a critical driver of organizational performance and a key enabler of strategy execution.
                                        We help organizations build and sustain cultures that foster engagement, inclusion, innovation, and
                                        high performance.
                                    </p>
                                    <p>
                                        Our approach to culture transformation is grounded in the understanding that culture is shaped by
                                        leadership behaviors, organizational systems, and shared experiences. We work with organizations to
                                        align these elements to create and reinforce the desired culture.
                                    </p>
                                </div>

                                <div className="mt-8 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-brand-dark"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-brand-dark mb-1">Culture Assessment</h4>
                                            <p className="text-brand-dark/70">
                                                Comprehensive analysis of current culture, identifying strengths, gaps, and opportunities for
                                                alignment with strategic objectives.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-brand-dark"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-brand-dark mb-1">Culture Transformation</h4>
                                            <p className="text-brand-dark/70">
                                                Development and implementation of comprehensive culture change initiatives, addressing
                                                leadership behaviors, systems, and employee experience.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-brand-dark"
                                            >
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-brand-dark mb-1">Diversity & Inclusion</h4>
                                            <p className="text-brand-dark/70">
                                                Support for organizations building more diverse, equitable, and inclusive cultures where all
                                                employees can thrive.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                                        Learn More About Culture Transformation
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="relative h-[500px] rounded-sm overflow-hidden">
                                <Image
                                    src="/placeholder.svg?height=500&width=600"
                                    alt="Culture Transformation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" duration={0.6}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">Client Success Stories</h2>
                            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
                                Hear from leaders who have partnered with SR Impact to drive meaningful change in their organizations.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <FadeIn direction="up" duration={0.6} delay={0.1}>
                            <div className="bg-brand-secondary p-8 rounded-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 relative rounded-full overflow-hidden">
                                        <Image
                                            src="/placeholder.svg?height=64&width=64"
                                            alt="CEO portrait"
                                            width={64}
                                            height={64}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-brand-dark">Sarah Thompson</h4>
                                        <p className="text-brand-dark/70">CEO, TechInnovate</p>
                                    </div>
                                </div>
                                <p className="text-brand-dark/80 italic mb-6">
                                    "SR Impact helped us navigate a complex organizational transformation during a period of rapid growth.
                                    Their team provided invaluable guidance on leadership development, organizational design, and culture
                                    change that enabled us to scale effectively while maintaining our core values."
                                </p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="#DED2CD"
                                            stroke="#DED2CD"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Testimonial 2 */}
                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="bg-brand-secondary p-8 rounded-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 relative rounded-full overflow-hidden">
                                        <Image
                                            src="/placeholder.svg?height=64&width=64"
                                            alt="COO portrait"
                                            width={64}
                                            height={64}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-brand-dark">Michael Chen</h4>
                                        <p className="text-brand-dark/70">COO, Global Health Partners</p>
                                    </div>
                                </div>
                                <p className="text-brand-dark/80 italic mb-6">
                                    "Working with SR Impact transformed how our leadership team operates. Their coaching and team
                                    effectiveness work helped us align on strategic priorities, improve our decision-making processes, and
                                    build stronger collaboration across the organization."
                                </p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="#DED2CD"
                                            stroke="#DED2CD"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Testimonial 3 */}
                        <FadeIn direction="up" duration={0.6} delay={0.3}>
                            <div className="bg-brand-secondary p-8 rounded-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 relative rounded-full overflow-hidden">
                                        <Image
                                            src="/placeholder.svg?height=64&width=64"
                                            alt="CHRO portrait"
                                            width={64}
                                            height={64}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-brand-dark">Amara Okafor</h4>
                                        <p className="text-brand-dark/70">CHRO, Retail Innovations</p>
                                    </div>
                                </div>
                                <p className="text-brand-dark/80 italic mb-6">
                                    "SR Impact's culture transformation work was instrumental in helping us build a more inclusive,
                                    high-performing organization. Their data-driven approach, combined with deep expertise in change
                                    management, enabled us to make meaningful progress on our culture journey."
                                </p>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="#DED2CD"
                                            stroke="#DED2CD"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn direction="up" duration={0.6} delay={0.4}>
                        <div className="mt-12 text-center">
                            <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                                View All Case Studies
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 md:py-24 bg-brand-secondary">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" duration={0.6}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">Our Approach</h2>
                            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
                                We tailor our services to meet the specific needs of each client, with flexible engagement models
                                designed to deliver maximum impact.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Engagement Model 1 */}
                        <FadeIn direction="up" duration={0.6} delay={0.1}>
                            <div className="bg-white p-8 rounded-sm shadow-sm">
                                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mb-6">
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
                                        className="text-brand-dark"
                                    >
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium mb-3 text-brand-dark">Advisory Services</h3>
                                <p className="text-brand-dark/70 mb-6">
                                    Strategic guidance and expert advice on leadership, organizational design, and culture transformation,
                                    tailored to your specific challenges and goals.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Expert consultation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Strategic recommendations</span>
                                    </li>
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Flexible engagement model</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                                    Learn More
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Engagement Model 2 */}
                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="bg-white p-8 rounded-sm shadow-sm border-2 border-brand-primary relative">
                                <div className="absolute top-0 right-0 bg-brand-primary text-brand-dark px-4 py-1 text-sm font-medium">
                                    Most Popular
                                </div>
                                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mb-6">
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
                                        className="text-brand-dark"
                                    >
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium mb-3 text-brand-dark">Transformation Programs</h3>
                                <p className="text-brand-dark/70 mb-6">
                                    Comprehensive, end-to-end support for major organizational transformations, from strategy development
                                    to implementation and sustainability.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Comprehensive assessment</span>
                                    </li>
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Tailored transformation roadmap</span>
                                    </li>
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Implementation support</span>
                                    </li>
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Capability building</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-brand-dark text-white hover:bg-brand-dark/90">Learn More</Button>
                            </div>
                        </FadeIn>

                        {/* Engagement Model 3 */}
                        <FadeIn direction="up" duration={0.6} delay={0.3}>
                            <div className="bg-white p-8 rounded-sm shadow-sm">
                                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mb-6">
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
                                        className="text-brand-dark"
                                    >
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-medium mb-3 text-brand-dark">Capability Building</h3>
                                <p className="text-brand-dark/70 mb-6">
                                    Focused programs to develop critical leadership and organizational capabilities through workshops,
                                    coaching, and experiential learning.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Customized learning experiences</span>
                                    </li>
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Expert facilitation</span>
                                    </li>
                                    <li className="flex items-center gap-2">
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
                                            className="text-brand-primary"
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <span className="text-brand-dark/70">Applied learning approach</span>
                                    </li>
                                </ul>
                                <Button className="w-full bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                                    Learn More
                                </Button>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn direction="up" duration={0.6} delay={0.4}>
                        <div className="mt-12 text-center">
                            <p className="text-lg text-brand-dark/80 mb-6">
                                Not sure which approach is right for your organization? Contact us for a consultation.
                            </p>
                            <Button className="bg-brand-dark text-white hover:bg-brand-dark/90">Schedule a Consultation</Button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-brand-primary">
                <div className="container mx-auto px-4 text-center">
                    <FadeIn direction="up" duration={0.6}>
                        <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">
                            Ready to transform your organization?
                        </h2>
                        <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto mb-8">
                            Let's discuss how SR Impact can help your organization navigate challenges and achieve sustainable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-brand-dark text-white hover:bg-brand-dark/90">Schedule a Consultation</Button>
                            <Button variant="outline" className="border-brand-dark text-brand-dark hover:bg-brand-dark/10">
                                Download Services Brochure
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

