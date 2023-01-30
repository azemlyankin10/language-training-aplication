import { Accordion } from "../../../../components/Accordion/Accordion"
import { Drawer } from "../../../../components/Drawer/Drawer"
import { addedWord } from "../../../../utils/types"

export const DrawerBtnReading = ({addedWords, onClose}: {addedWords: addedWord[], onClose: () => void}) => (
  <Drawer 
    title="Added words"
    onClose={onClose}
  >
    <ul className="w-full text-sm font-medium text-gray-900 border-none">
      {addedWords?.map(({word, translation, id}) => {

        return (
          <li key={id} className="w-full flex py-2">
            <Accordion title={word} text={translation} />
          </li>
        )
      })}
    </ul>
  </Drawer>
)

