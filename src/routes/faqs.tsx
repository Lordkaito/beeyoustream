import { Article } from '@/components/article'
import { Layout } from '@/components/layout'

export default function FaqsPage() {
  return (
    <Layout>
      <Article
        title="FAQ's"
        imageAlt="Lorem Picsum"
        imageSrc="https://picsum.photos/420/640?grayscale"
      >
        <p>Add your FAQ content here.</p>
        <details
          className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
          open
        >
          <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
            What is beeYOU?
          </summary>
          <p>
            beeYOU is a free HTML/CSS landing page designed and developed by{' '}
            <a href="https://twitter.com/pacovitiello">@pacovitiello</a> and{' '}
            <a href="https://twitter.com/DavidePacilio">@DavidePacilio</a>!
          </p>
          <p>
            beeYOU is suitable for all kind of startups, it's easily customizable, and it's
            downloadable for personal and commercial use.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">How can I use beeYOU?</summary>
          <p>
            beeYOU is licensed under the MIT License, which means you can use it for personal and
            commercial projects for free.
          </p>
          <p>
            You can also modify beeYOU to your needs, but you can't redistribute it or sell it as a
            template.
          </p>
        </details>
        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">Can I contribute to beeYOU?</summary>
          <p>
            Yes, you can! beeYOU is an open source project, and you can contribute to it on{' '}
            <a href="https://github.com/lukemcdonald/beeYOU-react">GitHub</a>.
          </p>
        </details>
      </Article>
    </Layout>
  )
}
