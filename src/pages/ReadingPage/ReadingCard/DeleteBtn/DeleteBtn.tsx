import { nanoid } from "nanoid"
import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { Modal } from "../../../../components/Modal/Modal"
import { notificationCollection, readingCards } from "../../../../state/atom"
import { deleteCard } from "../../../../utils/ts"
import { typeReadingCard } from "../../../../utils/types"

export const DeleteBtn = ({card}: {card: typeReadingCard}) => {
  const [isModal, setIsModal] = useState(false)
  const setReadingCards = useSetRecoilState(readingCards)
  const setNotificationCollection = useSetRecoilState(notificationCollection)

  const onCloseModal = () => {
    setIsModal(false)
  }

  const onAccept = () => {
    setReadingCards(old => deleteCard(old, card.id))
    setIsModal(false)
    setNotificationCollection(old => [...old, {id: nanoid(), type: 'deleted', text: 'text has been deleted'}])
  }
  return (
    <>
      <button 
        onClick={() => { setIsModal(true) }}
        type="button" 
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Delete
      </button>
      { 
        isModal && (
          <Modal 
            onClose={onCloseModal} 
            onAccept={onAccept}
            btns={true}
          >
            <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this element?
            </h3> 
          </Modal> 
        )
      }
    </>
  )
}