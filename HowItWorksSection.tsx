"use client"

import { useEffect, useRef, useState } from "react"

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)

  const steps = [
    { title: "Start Bot", description: "@OGFinderBot on Telegram" },
    { title: "Input Contract", description: "Paste token address" },
    { title: "Get Result", description: "Instant verification" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        const scrollPosition = window.scrollY + window.innerHeight / 2

        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const progress = (scrollPosition - sectionTop) / sectionHeight
          setActiveStep(Math.floor(progress * steps.length))
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-[#d2f8c6]">How It Works</h2>
        <p className="text-xl text-white/80">Three simple steps to verify any token</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] flex items-center justify-center">
          <div className="absolute left-0 top-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#d0ed56] to-transparent"></div>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === activeStep ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } flex flex-col items-center justify-center text-center`}
            >
              <div className="bg-[#0a2924]/60 backdrop-blur-sm p-8 rounded-2xl border border-[#d0ed56]/20 shadow-xl max-w-md">
                <h3 className="text-2xl font-bold mb-4 text-[#d2f8c6]">{step.title}</h3>
                <p className="text-lg text-white/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeStep ? "bg-[#d0ed56]" : "bg-[#d0ed56]/20"}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

