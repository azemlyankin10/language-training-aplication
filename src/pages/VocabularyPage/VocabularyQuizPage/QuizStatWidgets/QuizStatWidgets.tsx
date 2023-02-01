import { StatWidget } from "../../../../components/StatWidget/StatWidget"
import { typeQuizStatWidgets } from "../../../../utils/types"


export const QuizStatWidgets = ({ trueAnswers, falseAnswers, all }: typeQuizStatWidgets ) => (
  <div className="flex justify-end p-1 shadow-2xl rounded-lg">
    <StatWidget 
      text="i know"
      value={trueAnswers}
      color={{ 
        text: 'rgb(168 255 13)',
        value: trueAnswers > 0 ? 'rgb(168 255 13)' : '#fff' 
      }}
    />
    <StatWidget 
      text="i do not know" 
      value={falseAnswers}
      color={{ 
        text: 'red',
        value: falseAnswers > 0 ? 'red' : '#fff' 
      }}
    />
    <StatWidget text="all" 
      value={all}
      color={{
        text: '#F08500',
        value: '#F08500'
      }}
    />
  </div>
)