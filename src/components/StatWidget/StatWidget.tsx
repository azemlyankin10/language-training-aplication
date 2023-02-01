export const StatWidget = ({text, value, color}: {text: string, value: number, color?: {text?: string, value?: string}}) => (
  <div className="flex mx-3 my-3">
    <p 
      className="mr-1 uppercase text-middle text-white"
      style={{color: color?.text}}
    >
      {text}:
    </p>
    <span 
      className="text-green-400"
      style={{color: color?.value}}
    >
      {value}
    </span>
  </div>
)