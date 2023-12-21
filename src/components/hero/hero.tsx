import { NewsletterForm } from '@/components/newsletter-form'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
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
  const [users, setUsers] = useState<number | null>(null)

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

    fetchUserCount()

    return () => ScrollReveal().destroy()
  }, [])

  async function fetchUserCount() {
    fetch('https://express-beeyou.vercel.app/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
  }

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
                className="mb-4 mt-0 text-4xl font-bold text-[#282828] md:text-5xl"
                ref={addToScrollRevealRef}
              >
                beeYOU
              </h1>
              <p className="prose prose-xl m-auto text-[#7a7a7a]" ref={addToScrollRevealRef}>
                {content}
                <br />
                <br />
                <span className="prose prose-xl m-auto text-[#7a7a7a]">
                  Sign up to be informed of the launch!
                </span>
              </p>
              <br />
            </div>

            <div ref={addToScrollRevealRef}>
              <NewsletterForm
                className="mx-auto mt-8 max-w-md lg:mx-0"
                submitText="Join"
                fetchAgain={fetchUserCount}
              />
              <br />
              {users && (
                <div className="mt-2 text-[#b69bf0] prose-xl">
                  <span className="font-semibold">{users}</span> already interested bees!
                </div>
              )}
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
