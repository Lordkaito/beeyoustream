import type { PropsWithChildren } from 'react'

import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Header } from '@/components/header'
import { cn } from '@/utils/cn'

function Layout({
  children,
  className,
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <div
      className={cn(
        `relative mx-auto ml my-0 flex min-h-screen flex-col overflow-hidden bg-white shadow-2xl bg-image-div`,
        className,
      )}
    >
      <Gradient className="absolute bottom-0 left-1/2 top-0 ml-28 hidden w-1/2 lg:block" />
      <Header />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
