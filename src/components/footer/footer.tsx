import { SocialLinks } from '@/components/social-links'

function Footer() {
  return (
    <footer className="bg-[#625a57] py-6 text-sm leading-5 tracking-normal text-white lg:bg-transparent lg:text-gray-400">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex flex-col items-center gap-3 lg:flex-row lg:items-end">
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
