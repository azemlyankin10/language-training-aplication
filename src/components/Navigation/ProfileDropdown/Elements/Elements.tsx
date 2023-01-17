import { useState } from "react"
import { Settings } from "../../../Settings/Settings"

export const Elements = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <ul className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <li>
        <button
          onClick={() => { setIsSettingsOpen(true) }}
          className="bg-gray-100' 'block px-4 py-2 text-sm text-gray-700"
        >
          Settings
        </button>

        {isSettingsOpen && <Settings onClose={() => { setIsSettingsOpen(false) }}/>}

      </li>
    </ul>
  )
}