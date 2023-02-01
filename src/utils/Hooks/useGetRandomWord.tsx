// GjRAvaZZX5iwB3MRUvu0aQ==32zwnvQjDA5MTxyf

import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { settingsState } from '../../state/atom'
import { useTranslate } from './useTranslate'
import words from 'random-words'


export const useGetRandomWords = () => {
  const { translatedLang: { lang } } = useRecoilValue(settingsState)
  const [isLoading, setIsLoading] = useState(false)
  const { translate } = useTranslate()

  const getRandomWords = async() => {
    setIsLoading(true)
    const getRandomWords = words(3)
    const translatedTandomWords = await Promise.all(getRandomWords.map(async (word) => await translate(word, 'en', lang)))
    setIsLoading(false)
    return translatedTandomWords
    // setRandomWords(translatedTandomWords)
    // let arr = ['']
    // try {
    //   const urls = ['https://api.api-ninjas.com/v1/randomword', 'https://api.api-ninjas.com/v1/randomword', 'https://api.api-ninjas.com/v1/randomword']
    //   arr = await Promise.all(urls.map(
    //     url => fetch(url, {headers: {'X-Api-Key': 'GjRAvaZZX5iwB3MRUvu0aQ==32zwnvQjDA5MTxyf'}})
    //           .then(el => el.json())
    //           .then(({ word }) => translate(word, 'en', lang))
    //   ))
    // } catch (error) {
    //   console.log(error)
    // } finally {
    //   setIsLoading(false)
    //   return arr
    // }
  }


  return { getRandomWords, isLoading }
}


