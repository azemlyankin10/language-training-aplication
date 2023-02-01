import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { notificationCollection, readingCards, settingsState } from '../../state/atom'
import { convert } from '../ts'


export const useGetRandomArticle = () => {
  const [article, setArticle] = useState()
  const setNewText = useSetRecoilState(readingCards)
  const setNotificationCollection = useSetRecoilState(notificationCollection)
  const { originalLang: { lang } } = useRecoilValue(settingsState)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (article) {
      setNewText(old => [...old, { text: article, indicators: ['unread'], id: nanoid(), addedWords: [] }])
      setNotificationCollection(old => [...old, {id: nanoid(), type: 'success', text: 'text has been added to your collection'}])
    }
  }, [article, setNewText, setNotificationCollection])

  const getArticle = async() => {
    const language = lang.toLowerCase().slice(0,2)
    setIsLoading(true)
    try {
      const getTitleRes = await fetch(`https://${language}.wikipedia.org/api/rest_v1/page/random/summary`) as any
      const getTitleResEl = await getTitleRes.json()
      const res = await fetch(`https://${language}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${getTitleResEl.title.toLowerCase()}`) as any
      const el = await res.json()
      const text = el.query.search.map((el: any) => el.snippet.replace(/<[^>]*>?/gm, ''))
      setArticle(text.map((el: string) => convert(el)).join(','))
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  return { getArticle, isLoading }
}


