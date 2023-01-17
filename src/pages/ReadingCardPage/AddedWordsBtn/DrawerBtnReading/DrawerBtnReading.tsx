import { Accordion } from "../../../../components/Accordion/Accordion"
import { Drawer } from "../../../../components/Drawer/Drawer"
import { typeReadingCard } from "../../../../utils/types"

export const DrawerBtnReading = ({currentCard, onClose}: {currentCard: typeReadingCard, onClose: () => void}) => {

  return (
    <Drawer 
      title="Added words"
      onClose={onClose}
    >
      <ul className="w-full text-sm font-medium text-gray-900 border-none">
        {currentCard.addedWords?.map(({word, translation}, index) => {

          return (
            <li key={index} className="w-full flex py-2">
              <Accordion title={word} text={translation} />
            </li>
          )
        })}
      </ul>
    </Drawer>
  )
}

