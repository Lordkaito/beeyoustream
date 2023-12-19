import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import img from '../../assets/prueba.png'

function Illustration({ className }: { className?: string }) {
  const scrollRevealOneRef = useRef<HTMLDivElement[]>([])
  const scrollRevealTwoRef = useRef<HTMLDivElement[]>([])

  const addToScrollRevealOneRef = (el) => {
    scrollRevealOneRef.current.push(el)
  }

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
        className="absolute -top-48 left-96 hidden drop-shadow-2xl lg:block"
      >
        <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-1-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#c7d2fe" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div
        className="hero-ball hero-ball-2 absolute left-16 top-72 drop-shadow-2xl lg:-left-16 lg:top-80"
        ref={addToScrollRevealOneRef}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 30 30">
          <path
            fill="#ff9f00"
            d="M9.39 3a2.75 2.75 0 0 0-2.366 1.349l-4.885 8.25a2.75 2.75 0 0 0 0 2.802l4.885 8.25A2.75 2.75 0 0 0 9.39 25h9.22a2.75 2.75 0 0 0 2.366-1.348l4.887-8.25a2.75 2.75 0 0 0 0-2.804l-4.887-8.25A2.75 2.75 0 0 0 18.61 3zm-7.25 9.599l.645.382z"
          ></path>
        </svg>
      </div>
      <div ref={addToScrollRevealTwoRef} className="hero-illustration-browser drop-shadow-2xl">
        <img src={img} alt="" />
      </div>
      <div
        className="hero-ball hero-ball-3 absolute drop-shadow-2xl"
        ref={addToScrollRevealOneRef}
        style={{ top: '402px', left: '440px' }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-3-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#c7d2fe" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
          </defs>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 35 35">
            <path
              fill="#ff9f00"
              d="M9.39 3a2.75 2.75 0 0 0-2.366 1.349l-4.885 8.25a2.75 2.75 0 0 0 0 2.802l4.885 8.25A2.75 2.75 0 0 0 9.39 25h9.22a2.75 2.75 0 0 0 2.366-1.348l4.887-8.25a2.75 2.75 0 0 0 0-2.804l-4.887-8.25A2.75 2.75 0 0 0 18.61 3zm-7.25 9.599l.645.382z"
            ></path>
          </svg>
        </svg>
      </div>
      <div
        className="hero-ball hero-ball-4 absolute -top-5 left-44 lg:-top-20 lg:left-72"
        ref={addToScrollRevealOneRef}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-4-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#c7d2fe" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
            <filter
              x="-500%"
              y="-500%"
              width="1000%"
              height="1000%"
              filterUnits="objectBoundingBox"
              id="dropshadow-ball-4"
            >
              <feOffset dx="24" dy="24" in="SourceAlpha" result="shadowOffsetOuter" />
              <feGaussianBlur stdDeviation="24" in="shadowOffsetOuter" result="shadowBlurOuter" />
              <feColorMatrix
                values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                in="shadowBlurOuter"
              />
            </filter>
          </defs>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28">
            <path
              fill="#ff9f00"
              d="M9.39 3a2.75 2.75 0 0 0-2.366 1.349l-4.885 8.25a2.75 2.75 0 0 0 0 2.802l4.885 8.25A2.75 2.75 0 0 0 9.39 25h9.22a2.75 2.75 0 0 0 2.366-1.348l4.887-8.25a2.75 2.75 0 0 0 0-2.804l-4.887-8.25A2.75 2.75 0 0 0 18.61 3zm-7.25 9.599l.645.382z"
            ></path>
          </svg>
        </svg>
      </div>
      <div
        className="hero-ball hero-ball-5 absolute lg:-bottom-20 lg:left-80"
        ref={addToScrollRevealOneRef}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-5-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#c7d2fe" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
            <filter
              x="-500%"
              y="-500%"
              width="1000%"
              height="1000%"
              filterUnits="objectBoundingBox"
              id="dropshadow-ball-5"
            >
              <feOffset dx="24" dy="24" in="SourceAlpha" result="shadowOffsetOuter" />
              <feGaussianBlur stdDeviation="24" in="shadowOffsetOuter" result="shadowBlurOuter" />
              <feColorMatrix
                values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0"
                in="shadowBlurOuter"
              />
            </filter>
          </defs>
          <circle
            cx="12"
            cy="12"
            r="12"
            fill="#ffffff"
            fillRule="evenodd"
            filter="url(#dropshadow-ball-5)"
          />
        </svg>
      </div>
    </div>
  )
}

export default Illustration
