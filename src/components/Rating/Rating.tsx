export const Rating = ({name, procent, color}: {name: string, procent: number, color: string}) => {
  return (
    <div className="flex items-center mt-4 flex-wrap">
      <span className="text-sm font-medium text-white w-full my-2 uppercase">{name}</span>
      <div className="w-2/4 h-5 mr-4 bg-white rounded">
          <div className="h-5 rounded" style={{width: `${procent}%`, backgroundColor: color}}></div>
      </div>
      <span className="text-sm font-medium text-white ">{procent}%</span>
    </div>
  )
}