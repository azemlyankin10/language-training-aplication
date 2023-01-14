import { nanoid } from "nanoid"
import { createRef, FormEvent } from "react"
import { useSetRecoilState } from "recoil"
import { readingCards } from "../../state/atom"

export const FormAddText = () => {
  const ref = createRef<HTMLTextAreaElement>()
  const setNewText = useSetRecoilState(readingCards)

  const formSubmit = (e: FormEvent) => {
    e.preventDefault()
    const area = ref.current
    if (area) {
      setNewText(old => [...old, { text: area.value, indicators: ['unread'], id: nanoid(), addedWords: [] }])
      area.value = ''
    }
  }

  return (
    <form 
      onSubmit={formSubmit}
      className="h-96 p-2 rounded-lg border-4 border-dashed border-gray-200"
    >
      <textarea 
        ref={ref}
        className="h-5/6 w-full p-5 resize-none"
        placeholder="Input your custom text"
        >
      </textarea>
      <button 
        className="ml-auto block py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Add text
      </button>
    </form>
  )
}