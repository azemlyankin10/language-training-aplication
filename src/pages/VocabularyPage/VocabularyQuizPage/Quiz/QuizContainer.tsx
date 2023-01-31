import { CircularProgresBar } from "../../../../components/CircularProgresBar/CircularProgresBar"
import { getProcent } from "../../../../utils/ts"
import { typeQuizContainer } from "../../../../utils/types"


export const QuizContainer = ({word, quizSetUp, isAnswered, onClickHandler}: typeQuizContainer) => (
  <div 
    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full h-72 overflow-hidden relative"
  >
    <div className="absolute top-5 right-5">
      <CircularProgresBar strokeWidth={10} percentage={getProcent(word.knowWord, 10)} />
    </div>
    <img 
      className="object-cover w-4/12 rounded-t-lg h-full md:h-auto md:w-67 md:rounded-none md:rounded-l-lg" 
      src={quizSetUp.img}
      alt={`${quizSetUp.origin} word`}
    />
    <div 
      className="flex flex-col justify-between p-4 leading-normal"
    >
      <h5 
        className="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase"
      >
        {quizSetUp.origin}
      </h5>
      <div className="w-full">
        {quizSetUp.secondary.map((el, index) => (
          <button 
            disabled={isAnswered}
            key={index} 
            onClick={(e) => {onClickHandler(e, word.id, word.addedFrom)}} 
            type="button" 
            className="w-full px-4 py-2 font-medium text-left text-gray-900 cursor-pointer hover:underline uppercase"
          >
          {el}
          </button>
        ))}
      </div>

    </div>
  </div>
)