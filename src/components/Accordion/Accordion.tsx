import { useState } from "react"


export const Accordion = ({title, text}: {title: string, text: string}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpenHandler = () => {
    setIsOpen(!isOpen)
  }

  const icon = <svg data-accordion-icon className={`${isOpen && 'rotate-180'} w-6 h-6 shrink-0`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
  return (
    <div className="w-full">
      <h2>
        <button 
          onClick={onOpenHandler}
          type="button" 
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200"
        >
          <span>{title}</span>
          {icon}
        </button>
      </h2>
      {isOpen && (
        <div>
          <div className="py-5 font-light border-b border-gray-200">
            <p className="mb-2 text-gray-500">
              {text}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}