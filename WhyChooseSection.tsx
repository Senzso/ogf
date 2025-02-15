"use client"

import { useState, useEffect, useRef } from "react"

export function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const benefits = [
    {
      title: "24/7 Available",
      description: "Always online, ready to verify tokens instantly",
    },
    {
      title: "100% Accurate",
      description: "Zero false positives in token verification",
    },
    {
      title: "Lightning Fast",
      description: "Get results in under 2 seconds",
    },
    {
      title: "Early Warning",
      description: "Instant alerts for suspicious tokens",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight / 2

        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const progress = (scrollPosition - sectionTop) / sectionHeight
          setActiveIndex(Math.floor(progress * benefits.length))
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="why-choose-ogf" ref={sectionRef} className="py-20">
      <h2 className="text-4xl font-bold mb-16 text-[#d2f8c6] text-center">Why Choose OGF?</h2>
      <div className="bg-[#0a2924]/40 backdrop-blur-sm rounded-3xl px-4 py-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:pl-12">
            <h3 className="text-3xl font-bold text-[#d2f8c6]">Built by traders, for traders</h3>
            <p className="text-xl text-white/80">
              We understand the challenges of navigating the Solana ecosystem. That's why we've created a tool that we
              would use ourselves - reliable, fast, and always accurate.
            </p>
          </div>
          <div className="relative h-[400px] flex items-center justify-center">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                } flex flex-col items-center justify-center text-center`}
              >
                <div className="text-[#d0ed56] text-9xl font-bold opacity-20 mb-4">{index + 1}</div>
                <h4 className="text-2xl font-bold mb-2 text-[#d2f8c6]">{benefit.title}</h4>
                <p className="text-lg text-white/80 max-w-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

