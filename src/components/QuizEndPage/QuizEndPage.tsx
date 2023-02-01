import { StatCard } from "../StatCard/StatCard"
import { Rating } from "../Rating/Rating"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { scoreSettingsState, statsState } from "../../state/atom"
import { typeStat } from "../../utils/types"
import { getProcent } from "../../utils/ts"

export const QuizEndPage = ({session}: {session: string}) => {
  const { howManyNeedToCompleteWord } = useRecoilValue(scoreSettingsState)
  const stat = useRecoilValue(statsState)
  const [currentstat, setCurrentStat] = useState<typeStat>()

  useEffect(() => {
    const currentElem = stat.find(el => el.sessionId === session)
    setCurrentStat(currentElem)
  }, [session, stat])

  return (
    <div className="flex justify-between p-6 shadow-2xl rounded-lg">
      <div className="flex flex-col w-full mr-7">
        {currentstat?.falseCards.map(({ id, img, word, selectedWord, knowWord, dontKnowWord }) => (
          <StatCard 
            key={id}
            word={word} 
            img={img}
            translate={selectedWord}
            progress={{
              strokeWidth: 2, 
              percentage: getProcent(knowWord, howManyNeedToCompleteWord)
            }} 
            status={false} 
          />
        ))}
        {currentstat?.trueCards.map(({ id, img, word, selectedWord, knowWord, dontKnowWord }) => (
          <StatCard 
            key={id}
            word={word} 
            img={img}
            translate={selectedWord} 
            progress={{
              strokeWidth: 2, 
              percentage: getProcent(knowWord, howManyNeedToCompleteWord)
            }} 
            status={true} />
        ))}
        
      </div>
        {
          currentstat && (
            <div className="w-full align-right">
              <Rating 
                name='true' 
                procent={getProcent(currentstat?.trueCards.length, currentstat?.trueCards.length + currentstat?.falseCards.length)} 
                color='#A7FF08' 
              />
              <Rating 
                name='false' 
                procent={getProcent(currentstat?.falseCards.length, currentstat?.trueCards.length + currentstat?.falseCards.length)} 
                color='#F81818' 
              />
            </div>
          )
        }
    </div>
  )
}