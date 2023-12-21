import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="beeYOU"
        content="Access to widgets for your stream, free from ties to external platforms."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
