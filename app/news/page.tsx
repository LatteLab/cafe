import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Footer } from "@/components/footer"
import { HeroSection } from '@/components/hero-section'

const pressReleases = [
    {
        date: "February 10, 2025",
        category: "Boston Globe",
        title: "Microwaving your coffee changes it, and other lessons learned (while sipping espresso) in MIT’s coffee class",
        description: "This February marks the second year of the MIT class “Coffee Matters: Using the Breakerspace to Make the Perfect Cup.”",
        link: "https://www.boston.com/news/the-boston-globe/2025/02/10/microwaving-your-coffee-changes-it-and-other-lessons-learned-while-sipping-espresso-in-mits-coffee-class/",
        image: "https://bdc2020.o0bc.com/wp-content/uploads/2025/01/N7BR2I3ATPYRCG2UL24RVX433A-6798de302c123-768x432.jpg?width=900"
    },
    {
        date: "January 29, 2025",
        category: "NBC10 Boston",
        title: "A coffee fix is brewing at MIT",
        description: "A class at MIT is looking at the science of the perfect cup of coffee.",
        link: "https://www.youtube.com/watch?v=kO4-jYONaVU",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/WBTS-LD_NBC_10_Boston_logo.png"
    },
    {
        date: "January 29, 2025",
        category: "NBC10 Boston",
        title: "MIT professor masters the perfect cup of coffee",
        description: "The science behind great coffee is the subject of a class at the Massachusetts Institute of Technology.",
        link: "https://www.youtube.com/watch?v=6_vrs7XX4H8",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/WBTS-LD_NBC_10_Boston_logo.png"
    },
    {
        date: "January 7, 2025",
        category: "MIT News",
        title: "Coffee fix: MIT students decode the science behind the perfect cup",
        description: "Undergraduate class blends science, hands-on experimentation, and a love for coffee to fuel curiosity.",
        link: "https://news.mit.edu/2025/coffee-fix-mit-students-decode-science-behind-perfect-cup-0107",
        image: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202412/CoffeeClass1.jpg?itok=wWcwMN1z"
    },
];

interface PressReleaseProps {
    date: string;
    category: string;
    title: string;
    description: string;
    link: string;
    image: string;
}

function PressRelease({ date, category, title, description, link, image }: PressReleaseProps) {
    return (
        <FadeIn direction="up" duration={0.6}>
            <div className="bg-white p-8 rounded-sm shadow-sm flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/4 relative h-48 md:h-auto">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        className="object-contain rounded-sm"
                    />
                </div>
                <div className="md:w-3/4">
                    <h3 className="text-xl font-medium mb-3 text-brand-dark">
                        {title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-brand-dark/60">{date}</span>
                        <span className="inline-block px-3 py-1 bg-brand-primary/20 text-brand-dark/70 text-sm">
                            {category}
                        </span>
                    </div>
                    <p className="text-brand-dark/70 mb-4">
                        {description}
                    </p>
                    <Link
                        href={link}
                        className="text-brand-dark font-medium flex items-center gap-1 hover:text-brand-dark/80 transition-colors"
                    >
                        Read Full Release
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
        </FadeIn>
    );
}

export default function PressPage() {
    return (
        <main className="min-h-screen pt-14">
            <HeroSection title="News & Media" description="Stay updated with the latest news, articles, and media coverage featuring Latte Lab." />

            {/* Press Releases Section */}
            <section className="py-16 md:py-24 bg-brand-secondary">
                <div className="container mx-auto px-4">
                    <div className="space-y-8">
                        {pressReleases.map((release, index) => (
                            <PressRelease key={index} {...release} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}

