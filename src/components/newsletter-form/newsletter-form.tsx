import { cn } from '@/utils/cn'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

function NewsletterForm({
  className,
  onSubmit,
  submitText = 'Submit',
}: {
  className?: string
  onSubmit: (email: string) => Promise<any>
  submitText?: string
}) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = await onSubmit(email)
    console.log(result)
    setEmail('')
    setSuccess(true)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('newsletter-form is-revealing flex flex-col gap-2 sm:flex-row', className)}
    >
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="email" aria-hidden="true">
          Email
        </label>
        <input
          required
          placeholder="your email here"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
          className="w-full rounded-full border border-gray-300 bg-white px-4 py-3 text-sm text-[#625a57] placeholder:text-[#a9b1bc] shadow-none"
        />
        {success && (
          <div className="mt-2 text-xs italic text-[#b0cd6c]">email submitted successfully!</div>
        )}
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-full border-0 bg-gradient-to-r from-[#ff9f00] to-[#b25916] px-7 py-4 text-center leading-4 text-white no-underline shadow-lg font-semibold text-xl"
          type="submit"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
