// GjRAvaZZX5iwB3MRUvu0aQ==32zwnvQjDA5MTxyf

import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { settingsState } from '../../state/atom'
import { useTranslate } from './useTranslate'


export const useGetRandomWords = () => {
  const [randomWords, setRandomWords] = useState<any>([])
  const { translatedLang: { lang } } = useRecoilValue(settingsState)
  const [isLoading, setIsLoading] = useState(false)
  const { translate } = useTranslate()


  const getRandomWords = async() => {
    setIsLoading(true)
    try {
      let arr = []
      for (let i = 0; i < 3; i++) { 
        const res = await fetch('https://api.api-ninjas.com/v1/randomword', {headers: {'X-Api-Key': 'GjRAvaZZX5iwB3MRUvu0aQ==32zwnvQjDA5MTxyf'}}) as any
        const { word } = await res.json()
        const translatedWord = await translate(word, 'en', lang)
        arr.push(translatedWord)
      }
      setRandomWords(arr)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  return { randomWords, getRandomWords, isLoading }
}


