import { useEffect, useState } from "react"
import { Elements } from "./Elements/Elements"

const img = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('click', () => {
      setIsOpen(false)
    })
  }, [])

  return (
    <div 
      onClick={e => e.stopPropagation()}
      className="relative ml-3"
    >
      <div>
        <button 
          onClick={() => { setIsOpen(!isOpen) }}
          type='button'
          className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={img}
            alt="Your profile foto"
          />
        </button>
      </div>
      { isOpen && <Elements /> }
    </div>
  )
}