export const Drawer = ({title, children, onClose}: {title: string, children: any, onClose: () => void}) => {


  return (
    <div 
      className="absolute z-30 top-0 right-0 left-0 bottom-0 bg-[#0000002a]"
      onClick={onClose}
    >
      <div 
        className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 transition-transform left-0 top-0"
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500">
          {title}
        </h5>
        <button 
          type="button" 
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center" 
          onClick={onClose}
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close menu</span>
        </button>

        {children}

      </div>
    </div>
  )
}