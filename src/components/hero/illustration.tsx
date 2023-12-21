import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import img from '../../assets/heroimg.png'

function Illustration({ className }: { className?: string }) {
  const scrollRevealOneRef = useRef<HTMLDivElement[]>([])
  const scrollRevealTwoRef = useRef<HTMLDivElement[]>([])

  // const addToScrollRevealOneRef = (el) => {
  //   scrollRevealOneRef.current.push(el)
  // }

  const addToScrollRevealTwoRef = (el) => {
    scrollRevealTwoRef.current.push(el)
  }

  useEffect(() => {
    if (scrollRevealOneRef.current.length > 0) {
      scrollRevealOneRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          delay: 1000,
          duration: 1400,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'bottom',
          interval: 200,
        }),
      )
    }

    if (scrollRevealTwoRef.current.length > 0) {
      scrollRevealTwoRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          delay: 400,
          duration: 600,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'right',
          interval: 150,
        }),
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  return (
    <div className={className}>
      <div
        ref={addToScrollRevealTwoRef}
        className="hero-illustration-browser drop-shadow-2xl w-[300px] max-w-none md:w-[700px] lg:w-[700px]"
      >
        <img src={img} alt="" className="w-[300px] md:w-[700px] lg:w-[700px]" />
      </div>
    </div>
  )
}

export default Illustration
