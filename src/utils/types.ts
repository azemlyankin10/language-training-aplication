export type typeOfOneindicator = 'all' | 'favorits' | 'unread' | 'read'


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

export type typeReadingCard = {
  id: string
  text: string
  indicators: typeIndicators
  addedWords?: {word: string, translation: string}[]
}

export type position = {x: number, y: number}