import { NewsletterForm } from '@/components/newsletter-form'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

type ScrollRevealRefElement = HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement

function Hero({
  className,
  content,
  illustration,
  title,
}: {
  className?: string
  content: string
  illustration?: ReactNode
  title: string
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([])

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        }),
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  const addToScrollRevealRef = (el: ScrollRevealRefElement) => {
    scrollRevealRef.current.push(el)
  }

  return (
    <section className={cn('text-center lg:w-full lg:py-20 lg:text-left', className)}>
      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div className="hero-copy pb-16 pt-10 lg:min-w-[40rem] lg:pr-20 lg:pt-16">
            <div className="mx-auto w-full max-w-3xl">
              <h1
                className="mb-4 mt-0 text-4xl font-bold text-[#b25916] md:text-5xl"
                ref={addToScrollRevealRef}
              >
                <span className="text-[#ff9f00]">bee</span>
                <span>YOU</span>
              </h1>
              <p className="prose prose-xl m-auto text-[#625a57]" ref={addToScrollRevealRef}>
                {content}
                <br />
                <span className="prose prose-xl m-auto text-[#625a57]">
                  Sign up to be informed of the launch!
                </span>
              </p>
              <br />
            </div>

            <div ref={addToScrollRevealRef}>
              <NewsletterForm
                className="mx-auto mt-8 max-w-md lg:mx-0"
                submitText="Join"
              />
            </div>
          </div>

          {!!illustration && (
            <div className="relative -mx-6 py-10 lg:mx-0 lg:p-0">{illustration}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero