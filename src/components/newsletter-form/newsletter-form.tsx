import { cn } from '@/utils/cn'
import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

function NewsletterForm({
  className,
  submitText = 'Submit',
  fetchAgain,
}: {
  className?: string
  submitText?: string
  fetchAgain?: () => void
}) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      const response = await fetch('https://newsletter-server.vercel.app/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        fetchAgain && fetchAgain()
        setSuccess(true)
        setError(false)
        setEmail('')
      } else {
        setSuccess(false)
        setError(true)
        // Manejar el error aquí si es necesario
      }
    } catch (error) {
      // Manejar cualquier error de red u otros errores
      console.error('Error:', error)
      setSuccess(false)
      setError(true)
    }
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
          className="w-full rounded-full border-2 border-gray-300 bg-white px-4 py-3 text-lg text-[#b69bf0] shadow-none placeholder:text-[#b69bf0] focus:border-2 focus:border-[#eecafd] focus:ring-[#eecafd]"
        />
        {success && (
          <div className="mt-2 flex items-center justify-center gap-2 text-xs italic text-[#b69bf0]">
            <FaCheck /> email submitted successfully!
          </div>
        )}
        {error && (
          <div className="mt-2 flex items-center justify-center gap-2 text-xs italic text-[#b69bf0]">
            <ImCross size={10} /> something went wrong!
          </div>
        )}
      </div>

      <div className="control">
        <button
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-full border-0 bg-gradient-to-r from-[#eecafd] to-[#b69bf0] px-7 py-5 text-center text-xl font-semibold leading-4 text-white no-underline shadow-lg"
          type="submit"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}

export default NewsletterForm
