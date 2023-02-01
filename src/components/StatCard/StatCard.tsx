import { CircularProgresBar } from "../CircularProgresBar/CircularProgresBar"

type typeStatCard = {
  word: string
  img: string
  translate?: string
  progress: {
    strokeWidth: number
    percentage: number
  }
  status: boolean
}

export const StatCard = ({word, img, translate, progress: {strokeWidth, percentage}, status}: typeStatCard) => (
  <div 
    style={{maxHeight: 200}}
    className={`inline-flex mb-3 rounded items-center py-2 px-8 pl-2 ${status ? 'bg-green-100': 'bg-red-100'}`}
  >
    <div className="w-52 h-full mr-5 rounded overflow-hidden">
      <img 
        src={img} 
        className="w-full h-full" 
        alt={`${word} illustration`}
      />
    </div>

    <div className="pr-5">
      <p 
        className="mb-1 uppercase text-xl "
      >
          {word}
      </p>
      <p className={`uppercase ${status ? 'text-green-600' : 'text-red-600 line-through'}`}>
        {translate}
      </p>
    </div>
    <div className="ml-auto">
      <CircularProgresBar strokeWidth={strokeWidth} percentage={percentage}  />
    </div>
  </div>
)