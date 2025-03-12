import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/fade-in"
import { AnimatedNumber } from "@/components/animated-number"
import { Footer } from '@/components/footer'

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
                    We are engineering coffee community at MIT.
                  </p>
                </FadeIn>

                <FadeIn direction="up" duration={0.8} delay={0.6}>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/contact" className="bg-brand-primary text-brand-dark hover:bg-opacity-90 border-none px-4 py-2 rounded-md inline-block text-center">
                      Contact us
                    </Link>
                    <Link href="/about">
                      <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                        About us
                      </Button>
                    </Link>
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
                <p>We bring engineers, scientists, and coffee lovers together to drive innovation, community, and coffee science.</p>
              </FadeIn>
              {/* <FadeIn direction="up" duration={0.6} delay={0.2}>
                <p>From sketch to investor pitch.</p>
              </FadeIn>
              <FadeIn direction="up" duration={0.6} delay={0.3}>
                <p>From the 'chaos of doing' to delivering a vision.</p>
              </FadeIn> */}
            </div>
          </div>
          <div className="hidden md:block bg-brand-primary">
            <div className="aspect-square h-full w-full relative">
              <Image
                src="/mission.jpeg"
                alt="Mission image"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-4">
            {/* <FadeIn direction="up" duration={0.6}>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-bold mb-2 text-brand-dark">
                  <AnimatedNumber value={14} duration={1500} />
                </h3>
                <p className="text-brand-dark/70">Office locations</p>
              </div>
            </FadeIn> */}

            <FadeIn direction="up" duration={0.6} delay={0.1}>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-bold mb-2 text-brand-dark">
                  <AnimatedNumber value={72} duration={1800} />
                </h3>
                <p className="text-brand-dark/70">Members</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.2}>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-bold mb-2 text-brand-dark">
                  <AnimatedNumber value={750} duration={2000} suffix="+" />
                </h3>
                <p className="text-brand-dark/70">Cups Served</p>
              </div>
            </FadeIn>

            {/* <FadeIn direction="up" duration={0.6} delay={0.3}>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-6xl font-bold mb-2 text-brand-dark">
                  <AnimatedNumber value={22000} duration={2200} />
                  <span className="text-5xl md:text-6xl font-bold">k</span>
                </h3>
                <p className="text-brand-dark/70">Hours donated</p>
              </div>
            </FadeIn> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-brand-secondary">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" duration={0.6}>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-brand-dark">What we do</h2>
              <p className="text-lg text-brand-dark/70 max-w-xl">
                We use caffeine as a catalyst for innovation, community, and impact.
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
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2 text-brand-dark">
                  Coffee Science Research
                </h3>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.2}>
              <div>
                <div className="aspect-square relative mb-6 overflow-hidden rounded-sm">
                  <Image
                    src="/cafe.jpeg"
                    alt="Team of professionals"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2 text-brand-dark">
                  Specialty Coffee Cart
                </h3>
              </div>
            </FadeIn>

            <FadeIn direction="up" duration={0.6} delay={0.3}>
              <div>
                <div className="aspect-square relative mb-6 overflow-hidden rounded-sm">
                  <Image
                    src="/consulting.jpeg"
                    alt="Leadership coaching session"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2 text-brand-dark">
                  Coffee Technology Consulting
                </h3>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="up" duration={0.6} delay={0.4}>
            <div className="mt-8">
              <Link href="/services">
                <Button
                  variant="outline"
                  className="bg-brand-primary text-brand-dark border-brand-primary hover:bg-brand-primary/80"
                >
                  Read more
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </main>
  )
}

