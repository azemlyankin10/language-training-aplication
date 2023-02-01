import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import { useRecoilState } from "recoil"
import { statsState } from "../../state/atom"
import { typeStat } from "../types"

export const useCreateStatInstanse = ({name}: {name: 'quiz' | 'cards'}) => {
  const [statistic, setStatictic] = useRecoilState(statsState)
  const [currentStat, setCurrentStat] = useState<typeStat>()
  const [session, setSession] = useState('')

  useEffect(() => {
    setSession(nanoid())
  }, [])

  useEffect(() => {
    if (session) {
      const stat = statistic.find(el => el.sessionId === session)
      setCurrentStat(stat)
    }
  }, [session, statistic])

  useEffect(() => {
    if (session) {
      setStatictic(
        [
          ...statistic, 
          {
            sessionId: session,
            taskName: name,
            trueCards: [],
            falseCards: []
          }
        ]
      )
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]) 

  return { session, currentStat }
}