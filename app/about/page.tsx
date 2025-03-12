import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { Lightbulb, Users, Award } from 'lucide-react'
import { JSX } from 'react'

const teamMembers = [
    {
        name: "Sarah Johnson",
        title: "CEO & Founder",
        description: "With over 20 years of experience in organizational leadership, Sarah founded SR Impact to help leaders navigate complex challenges and drive sustainable growth.",
        image: "/placeholder.svg?height=600&width=450"
    },
    {
        name: "Michael Chen",
        title: "Chief Strategy Officer",
        description: "Michael leads our strategic consulting practice, helping organizations align their vision, culture, and operations to achieve breakthrough results.",
        image: "/placeholder.svg?height=600&width=450"
    },
    {
        name: "Amara Okafor",
        title: "Head of Leadership Development",
        description: "Amara specializes in executive coaching and leadership development programs that transform how leaders think, act, and inspire their teams.",
        image: "/placeholder.svg?height=600&width=450"
    },
    {
        name: "David Rodriguez",
        title: "Global Operations Director",
        description: "David oversees our global operations, ensuring seamless delivery of services across our 14 offices and maintaining our high standards of excellence.",
        image: "/placeholder.svg?height=600&width=450"
    },
    {
        name: "Emma Wilson",
        title: "Innovation Lead",
        description: "Emma helps organizations foster cultures of innovation and develop new approaches to complex challenges in rapidly changing environments.",
        image: "/placeholder.svg?height=600&width=450"
    },
    {
        name: "Raj Patel",
        title: "Technology Transformation Director",
        description: "Raj specializes in helping organizations leverage technology to drive business transformation and create competitive advantage.",
        image: "/placeholder.svg?height=600&width=450"
    },
    {
        name: "Sofia Martinez",
        title: "Culture & Change Expert",
        description: "Sofia guides organizations through cultural transformations, helping them build inclusive, high-performing environments where people thrive.",
        image: "/placeholder.svg?height=600&width=450"
    },
    {
        name: "James Kim",
        title: "Sustainability Advisor",
        description: "James helps organizations develop and implement sustainability strategies that create long-term value for all stakeholders.",
        image: "/placeholder.svg?height=600&width=450"
    }
];

const values = [
    {
        title: "Innovation",
        description: "We explore coffee beyond its taste, using science and engineering to uncover new possibilities.",
        icon: <Lightbulb className="text-brand-dark" size={24} />
    },
    {
        title: "Community",
        description: "Great ideas start with great conversations, and we bring together people who are passionate about both coffee and progress.",
        icon: <Users className="text-brand-dark" size={24} />
    },
    {
        title: "Excellence",
        description: "Whether in research or brewing, we approach everything with precision, curiosity, and a commitment to quality.",
        icon: <Award className="text-brand-dark" size={24} />
    }
];

interface TeamMemberProps {
    name: string;
    title: string;
    description: string;
    image: string;
}

interface ValueProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

function TeamMember({ name, title, description, image }: TeamMemberProps) {
    return (
        <FadeIn direction="up" duration={0.6}>
            <div className="group relative overflow-hidden rounded-sm">
                <div className="aspect-[3/4] relative">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-medium text-white mb-1">{name}</h3>
                        <p className="text-white/80 mb-3">{title}</p>
                        <p className="text-white/90 text-sm">{description}</p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl font-medium text-white mb-1">{name}</h3>
                    <p className="text-white/80">{title}</p>
                </div>
            </div>
        </FadeIn>
    );
}

function Value({ title, description, icon }: ValueProps) {
    return (
        <FadeIn direction="up" duration={0.6}>
            <div className="bg-white p-8 rounded-sm shadow-sm">
                <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mb-6">
                    {icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-brand-dark">{title}</h3>
                <p className="text-brand-dark/70">{description}</p>
            </div>
        </FadeIn>
    );
}

export default function AboutPage() {
    return (
        <main className="min-h-screen mt-14">
            <HeroSection
                title="We fuel innovation, community, and coffee-driven discovery."
                description="Latte Lab is a hub where science, technology, and coffee intersect. We foster innovation, build community, and conduct cutting-edge research to push the boundaries of coffee and its impact on the world."
            />

            {/* Our Story Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="up" duration={0.6}>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">Our Story</h2>
                                <div className="space-y-4 text-brand-dark/80">
                                    <p>
                                        Founded in 2010, SR Impact began with a simple mission: to provide leaders with the support they need
                                        to drive meaningful change in their organizations and communities.
                                    </p>
                                    <p>
                                        What started as a small team of passionate consultants has grown into a global network of over 450
                                        experts across 14 offices worldwide. Despite our growth, we've maintained our commitment to
                                        personalized service and measurable results.
                                    </p>
                                    <p>
                                        Today, we work with Fortune 500 companies, high-growth startups, and nonprofit organizations to
                                        tackle their most pressing challenges and capitalize on their biggest opportunities.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn direction="up" duration={0.6} delay={0.2}>
                            <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden">
                                <Image
                                    src="/logo.JPEG"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 bg-brand-secondary">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" duration={0.6}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">Our Values</h2>
                            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
                                These core principles guide everything we do and define how we work with our clients and each other.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Value key={index} {...value} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up" duration={0.6}>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-medium mb-6 text-brand-dark">Meet Our Team</h2>
                            <p className="text-xl text-brand-dark/80 max-w-2xl mx-auto">
                                Our diverse team of experts brings decades of experience across industries and disciplines.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </div>

                    <FadeIn direction="up" duration={0.6} delay={0.5}>
                        <div className="mt-12 text-center">
                            <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                                View All Team Members
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </section> */}
            <Footer />
        </main>
    )
}
