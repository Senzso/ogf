import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Search, CheckCircle, ExternalLink } from "lucide-react"
import { WhyChooseSection } from "./WhyChooseSection"
import { HowItWorksSection } from "./HowItWorksSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b4f42] to-[#0a2924] font-space-grotesk">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <header className="container mx-auto px-4 py-6 relative max-w-7xl">
        <Image
          src="https://i.postimg.cc/QtCgjTZg/transparent.png"
          alt="OGF Logo"
          width={80}
          height={80}
          className="hover:scale-110 transition-transform duration-300"
        />
      </header>

      <main className="container mx-auto px-4 relative max-w-7xl">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block rounded-full px-4 py-1.5 bg-[#d2f8c6]/10 text-[#d2f8c6] text-sm font-medium animate-fade-up">
                Powered by AI Technology
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#d2f8c6] tracking-tight leading-none animate-fade-up animation-delay-100">
                Find the Real OG on Solana
              </h1>
              <p className="text-xl text-white/80 max-w-[600px] animate-fade-up animation-delay-200">
                Your AI-powered guardian against fake tokens. Never get duped by clones again with our advanced
                verification system.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-300">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#d0ed56] text-[#0a2924] hover:bg-[#b8d43e] hover:scale-105 transition-all"
                >
                  <Link href="https://web.telegram.me" target="_blank" rel="noopener noreferrer">
                    Launch App <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all"
                >
                  <a href="#why-choose-ogf">
                    Learn More <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-white/60 animate-fade-up animation-delay-400">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#d0ed56]/20 border border-[#d0ed56]/40" />
                  ))}
                </div>
                <p className="text-sm">Trusted by 1000+ traders</p>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="relative lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-b from-[#d0ed56]/20 to-transparent rounded-full blur-3xl" />
              <Image
                src="https://i.postimg.cc/L4BPGDPd/mokcup.png"
                alt="OGF App Mockup"
                width={400}
                height={800}
                className="relative z-10"
                priority
              />
            </div>
          </div>
        </section>

        {/* What It Does Section */}
        <section id="simple-and-powerful" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#d2f8c6]">Simple & Powerful</h2>
            <p className="text-xl text-white/80">
              Just input a contract address, and we'll verify if it's the real OG token
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessCard
              icon={<Search className="w-8 h-8" />}
              step="1"
              title="Input Contract"
              description="Paste any Solana token contract address"
            />
            <ProcessCard
              icon={<Shield className="w-8 h-8" />}
              step="2"
              title="Instant Scan"
              description="Our AI scans the blockchain in milliseconds"
            />
            <ProcessCard
              icon={<CheckCircle className="w-8 h-8" />}
              step="3"
              title="Get Results"
              description="Receive immediate verification status"
            />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* CTA Section */}
        <section id="cta" className="text-center py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-[#d2f8c6]">Ready to Find the Real OG?</h2>
            <p className="text-xl mb-8 text-white/80">
              Join thousands of traders who trust OGF for authentic token verification.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#d0ed56] text-[#0a2924] hover:bg-[#b8d43e] hover:scale-105 transition-all"
            >
              <Link href="https://web.telegram.me" target="_blank" rel="noopener noreferrer">
                Launch OGF on Telegram <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-[#d2f8c6]/60 relative max-w-7xl">
        <p>&copy; {new Date().getFullYear()} OGF (OG Finder). All rights reserved.</p>
      </footer>
    </div>
  )
}

function ProcessCard({ icon, step, title, description }) {
  return (
    <div className="bg-[#0a2924]/40 backdrop-blur-sm p-8 rounded-2xl text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d0ed56]/10 text-[#d0ed56] mb-4">
        {icon}
      </div>
      <div className="text-[#d0ed56] text-sm font-medium mb-2">Step {step}</div>
      <h3 className="text-xl font-bold mb-2 text-[#d2f8c6]">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  )
}

