import { useState } from "react";
import { Drawer } from "../../../../components/Drawer/Drawer";

export const AddedWordsBtn = ({length}: {length?: number}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button 
        type="button" 
        className="ml-auto block my-6 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300"
        onClick={onOpen}
      >
        Added words
        <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-purple-800 bg-purple-200 rounded-full">
          {length}
        </span>
      </button>
      {
        isOpen && (
          <Drawer 
            title="Added words"
            onClose={onClose}
          >
            {/* //TODO: realize accordion */}
            <ul className="w-48 text-sm font-medium text-gray-900 border-none">
              <li className="flex py-2">
                <p>comments</p>
                {/* <hr className="h-px my-1 bg-gray-200 border-0" /> */}
                <p>комментарии</p>
              </li>
            </ul>
          </Drawer>
        )
      }
    </>
  )
}