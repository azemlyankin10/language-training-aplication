import { useEffect, useState } from "react";
import { typeOptions } from "../../utils/types";
import { useRecoilValue } from "recoil";
import { readingCards } from "../../state/atom";
import { changeCollection } from "../../utils/ts";
import { useGetRandomArticle } from "../../utils/Hooks/useGetRandomArticle";
import { ReadingPageContainer } from "./ReadingPageContainer/ReadingPageContainer";

const options: typeOptions = [
  {
    id: 1,
    value: 'all'
  },
  {
    id: 2,
    value: 'favorit'
  },
  {
    id: 3,
    value: 'unread'
  },
  {
    id: 4,
    value: 'read'
  },
]

export const ReadingPage = () => {
  const [selected, setSelected] = useState(options[0])
  const cards = useRecoilValue(readingCards)
  const [cardCollection, setCardCollection] = useState(cards)
  const { getArticle, isLoading } = useGetRandomArticle()

  useEffect(() => {
    const updatedCollection = changeCollection(selected.value, cards)
    setCardCollection(updatedCollection)
  }, [cards, selected])

  return (
    <ReadingPageContainer
      select={{ options, selected, setSelected }}
      getArticleBtn={{ isLoading, getArticle }}
      cards={cardCollection}
    />
  )
}
  
