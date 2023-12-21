import { SocialLinks } from '@/components/social-links'

function Footer() {
  return (
    <footer className="bg-[#7a7a7a] py-2 text-sm leading-5 tracking-normal text-white lg:bg-transparent lg:text-[#282828]">
      <div className="mx-auto w-full flex items-center justify-center max-w-6xl px-6">
        <div className="relative flex items-center gap-3 lg:flex-row lg:items-end">
          <div className="order-1">&copy; beeYOU. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-6 lg:items-end">
            <SocialLinks className="flex gap-4" />
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
