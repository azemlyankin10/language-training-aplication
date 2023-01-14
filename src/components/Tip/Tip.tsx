import { position } from "../../utils/types"

export const Tip = ({ position, children }: {position: position, children: any}) => (
  <div 
    className="absolute z-10 inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm"
    style={{top: position.y + 5, left: position.x + 5}}
  >
    {children}
  </div>
)

// absolute z-10 invisible 
