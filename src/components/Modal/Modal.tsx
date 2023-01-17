import { ReactNode } from "react"
import { createPortal } from "react-dom"

type typeModal = {
  children: ReactNode, 
  onClose: () => void, 
  onAccept: () => void
  btns: boolean
}

export const Modal = ({children, onClose, onAccept, btns}: typeModal) => {

  const root = document.getElementById('modal-root')
  if (!root) {
    return null
  }
  return createPortal((
    (
      <div 
        onClick={onClose}
        className="fixed top-0 left-0 right-0 z-40 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-[#0000002a] flex items-center justify-center"
      >
        <div 
          onClick={(e) => e.stopPropagation()}
          className="relative w-full h-full max-w-md md:h-auto"
        >
            <div className="relative bg-white rounded-lg shadow">
              <button 
                onClick={onClose}
                type="button" 
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
  
                  {children}
                
                {btns && (
                  <>
                    <button 
                      onClick={onAccept}
                      type="button" 
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    >
                      Yes, I'm sure
                    </button>
                    <button 
                      onClick={onClose}
                      type="button" 
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    >
                      No, cancel
                    </button>
                  </>
                )}
  
                </div>
            </div>
        </div>
      </div>
    )
  ), root)
}

