import { Dispatch, ReactNode, SetStateAction } from "react"

export type typeOfOneindicator = 'all' | 'favorit' | 'unread' | 'read'


export type typeIndicators = Array<typeOfOneindicator>


export type typeSelectOption = {
  id: number,
  value: typeOfOneindicator 
}

export type typeOptions = typeSelectOption[]

export type typeSelect = {
  options: typeSelectOption[]
  selected: typeSelectOption
  setSelected: (selected: typeSelectOption) => void
}

export type addedWord = {
  addedFrom: string,
  id: string,
  word: string, 
  translation: string
  knowWord: number,
  dontKnowWord: number,
  studied: boolean,
  img: string,
  selectedWord?: string,
}

export type typeReadingCard = {
  id: string
  text: string
  indicators: typeIndicators
  // addedWords?: addedWord[]
}

export type position = {x: number, y: number}

export type typeToast = 'success' | 'deleted'

export type typeNotifications = {
  id: string
  type: typeToast
  text: string
}

export type typeLang = {
  id: string
  voiceURI: string
  name: string
  lang: string
  localService: boolean 
  default: boolean
  selected: boolean
}

export type typeCard = {
  title: string
  desc: string
  link: string
  img: string
}

export type typeQuiz = {
  session: string
  word: addedWord
  changeTaskHandler: () => void
}

export type typeQuizContainer = {
  word: addedWord, 
  quizSetUp: {img: string, origin: string, secondary: string[]}, 
  isAnswered: boolean, 
  onClickHandler: (e: React.MouseEvent<HTMLElement>, wordId: string, cardId: string) => void
  progresBarIndex: number
}

export type typeFlipCard = {
  word: string, 
  translation: string, 
  img: string, 
  knowWord: () => void, 
  dontKnowWord: () => void
}

export type typeFlipCardContainer = {
  isFlipped: boolean
  isDisabledBtnKnowAndDontKnow: boolean
  speakBtn: () => void
  handleCardClick: () => void
  word: string
  translation: string
  img: string
  knowBtnHandler: () => void
  dontKnowBtnHandler: () => void
}

export type typeStat = {
  sessionId: string, 
  taskName: string, 
  trueCards: addedWord[] | [], 
  falseCards: addedWord[] | []
}

export type typeReadingPageContainer = {
  select: {
    options: typeSelectOption[]
    selected: typeSelectOption
    setSelected: Dispatch<SetStateAction<typeSelectOption>>
  }
  getArticleBtn: typeGetArticleBtn
  cards: typeReadingCard[]
}

export type typeGetArticleBtn = {
  isLoading: boolean
  getArticle: () => void
}

export type typeQuizStatWidgets = {
  trueAnswers: number, 
  falseAnswers: number, 
  all: number
}

export type typeTaskLayout = { 
  isPlay: boolean, 
  swiperSlides: ReactNode, 
  finishTaskReactNode: ReactNode 
}

export type typeTranslationTip = { 
  card: typeReadingCard, 
  position: position, 
  word: string, 
  onClose: () => void
}