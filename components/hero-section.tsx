import { FadeIn } from "@/components/fade-in"

interface HeroSectionProps {
    title: string;
    description: string;
}

export function HeroSection({ title, description }: HeroSectionProps) {
    return (
        <section className="relative bg-brand-primary py-24 md:py-32">
            <div className="absolute inset-0 z-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,100 M0,100 L100,0" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M50,0 L50,100 M0,50 L100,50" stroke="currentColor" strokeWidth="0.5" />
                </svg>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <FadeIn direction="up" duration={0.8}>
                    <h1 className="text-4xl md:text-6xl font-light text-brand-dark mb-6 max-w-4xl">
                        {title}
                    </h1>
                </FadeIn>
                <FadeIn direction="up" duration={0.8} delay={0.2}>
                    <p className="text-xl md:text-2xl text-brand-dark/80 max-w-2xl">
                        {description}
                    </p>
                </FadeIn>
            </div>
        </section>
    )
}
