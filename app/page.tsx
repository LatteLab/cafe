import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { AnimatedNumber } from "@/components/animated-number"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/coffee-science.jpeg"
            alt="Background image of a professional"
            fill
            className="object-cover brightness-50"
            priority
          />

        </div>

        <div className="relative z-10 h-full flex flex-col">
          <header className="bg-black/30 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2 text-white">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" fill="white" />
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" fill="white" />
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" fill="white" />
                  </svg>
                </div>
                <span className="text-xl font-medium">SR Impact</span>
              </Link>

              <nav className="hidden md:flex items-center gap-8 text-white">
                <Link href="/about" className="hover:text-gray-300 transition-colors">
                  About us
                </Link>
                <Link href="/services" className="hover:text-gray-300 transition-colors">
                  Services
                </Link>
                <Link href="/clients" className="hover:text-gray-300 transition-colors">
                  Clients
                </Link>
                <Link href="/startups" className="hover:text-gray-300 transition-colors">
                  For Startups
                </Link>
                <Button variant="outline" className="bg-brand-primary text-brand-dark hover:bg-opacity-90 border-none">
                  Contact us
                </Button>
              </nav>

              <Button variant="ghost" className="md:hidden text-white">
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

          <div className="flex-1 flex flex-col justify-center px-4 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <FadeIn direction="up" duration={0.8} delay={0.2}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
                  Brewing the future
                  <br />
                  one cup, one idea
                  <br />
                  at a time.
                </h1>
              </FadeIn>

              <div className="mt-12 md:mt-24">
                <FadeIn direction="up" duration={0.8} delay={0.4}>
                  <p className="text-xl md:text-2xl text-white max-w-2xl">
                    We bring engineers, scientists, and coffee lovers together to drive innovation, community, and coffee science.
                  </p>
                </FadeIn>

                <FadeIn direction="up" duration={0.8} delay={0.6}>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button className="bg-brand-primary text-brand-dark hover:bg-opacity-90 border-none">
                      All services
                    </Button>
                    <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                      About us
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-brand-secondary">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 md:p-16 lg:p-24">
            <FadeIn direction="up" duration={0.6}>
              <h2 className="text-xl text-brand-dark/70 mb-8">Our mission statement</h2>
            </FadeIn>

            <div className="space-y-4 text-2xl md:text-3xl font-light text-brand-dark">
              <FadeIn direction="up" duration={0.6} delay={0.1}>
                <p>From idea to strategy.</p>
              </FadeIn>
              <FadeIn direction="up" duration={0.6} delay={0.2}>
                <p>From sketch to investor pitch.</p>
              </FadeIn>
              <FadeIn direction="up" duration={0.6} delay={0.3}>
                <p>From the 'chaos of doing' to delivering a vision.</p>
              </FadeIn>
            </div>
          </div>
          <div className="hidden md:block bg-brand-primary">
            {/* Decorative geometric pattern */}
            <div className="h-full w-full opacity-30">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 L100,100 M0,100 L100,0" stroke="currentColor" strokeWidth="0.5" />
                <path d="M50,0 L50,100 M0,50 L100,50" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <FadeIn direction="up" duration={0.6}>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-bold mb-2 text-brand-dark">
                  <AnimatedNumber value={14} duration={1500} />
                </h3>
                <p className="text-brand-dark/70">Office locations</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.1}>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-bold mb-2 text-brand-dark">
                  <AnimatedNumber value={89} duration={1800} />
                </h3>
                <p className="text-brand-dark/70">Awards won</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.2}>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-bold mb-2 text-brand-dark">
                  <AnimatedNumber value={450} duration={2000} suffix="+" />
                </h3>
                <p className="text-brand-dark/70">Propheteers</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.3}>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-bold mb-2 text-brand-dark">
                  <AnimatedNumber value={22000} duration={2200} />
                  <span className="text-5xl md:text-6xl font-bold">k</span>
                </h3>
                <p className="text-brand-dark/70">Hours donated</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-secondary">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" duration={0.6}>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-medium mb-4 text-brand-dark">What we help</h2>
              <p className="text-lg text-brand-dark/70 max-w-xl">
                Our focused support to leaders makes a huge difference, especially during fast growth phases.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn direction="up" duration={0.6} delay={0.1}>
              <div>
                <div className="aspect-square relative mb-6 overflow-hidden rounded-sm">
                  <Image
                    src="/research.jpeg"
                    alt="Professional in a modern office setting"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-brand-dark">
                  People, order design &<br />
                  ways of working
                </h3>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.2}>
              <div>
                <div className="aspect-square relative mb-6 overflow-hidden rounded-sm">
                  <Image
                    src="/cafe.jpeg"
                    alt="Team of professionals"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-brand-dark">
                  Culture, Mentoring &<br />
                  Development
                </h3>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.3}>
              <div>
                <div className="aspect-square relative mb-6 overflow-hidden rounded-sm">
                  <Image
                    src="/consulting.jpeg"
                    alt="Leadership coaching session"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-2 text-brand-dark">
                  Leadership &<br />
                  making change
                </h3>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" duration={0.6} delay={0.4}>
            <div className="mt-8">
              <Button
                variant="outline"
                className="bg-brand-primary text-brand-dark border-brand-primary hover:bg-brand-primary/80"
              >
                Read more
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}

