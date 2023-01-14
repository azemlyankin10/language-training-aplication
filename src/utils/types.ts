export type typeOfOneindicator = 'favorits' | 'unread'

export type typeIndicators = Array<typeOfOneindicator>


export type typeSelectOption = {
  id: number,
  value: string
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
  addedWords?: string[] | undefined
}

export type position = {x: number, y: number}
