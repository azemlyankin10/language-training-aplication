import { createRef, useEffect, useState } from "react"
import { position } from "../../utils/types"

export const Tip = ({ position, children, onClose }: {position: position, children: any, onClose: () => void}) => {
  const ref = createRef<HTMLDivElement>()
  const [currentPosition, setCurrentPosition] = useState(position)

  useEffect(() => {
    if(ref.current) {
      const { innerWidth: wWidth } = window
      const { x, width } = ref.current.getBoundingClientRect()
      if (x + width > wWidth) {
        const x = wWidth - (width + 15)
        setCurrentPosition({ ...currentPosition, x })
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div 
      className="absolute top-0 left-0 w-full h-full"
      onClick={onClose}
    >
      <div 
        className="absolute z-10 inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm"
        style={{top: currentPosition.y + 5, left: currentPosition.x + 5}}
        onClick={e => e.stopPropagation()}
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}



