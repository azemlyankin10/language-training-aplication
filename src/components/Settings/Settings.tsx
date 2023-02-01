import { nanoid } from "nanoid"
import { ChangeEvent } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { notificationCollection, settingsState } from "../../state/atom"
import { useSpeechSynthesis } from "../../utils/Hooks/useSpeechSynthesis"
import { Modal } from "../Modal/Modal"

export const Settings = ({onClose}: {onClose: () => void}) => {
  const [settingState, setSettingState] = useRecoilState(settingsState)
  const setNotificationCollection = useSetRecoilState(notificationCollection)
  const { langs, getLang } = useSpeechSynthesis()

  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name
    const value = e.target.value
    const newState = {...settingState, [name]: getLang(value)}
    setSettingState(newState)
    setNotificationCollection(old => [...old, {id: nanoid(), type: 'success', text: 'Language has been changed'}])
  }

  return (
    <Modal 
      onClose={onClose}
      onAccept={() => { console.log('accept') }}
      btns={false}
    >
      <div className="my-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Select a voice language</label>
        <select 
          defaultValue={settingState.voiceLang.lang}
          onChange={selectHandler}
          name='voiceLang'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {<option value={settingState.voiceLang.id}>{settingState.voiceLang.trueName}</option>}
          {langs.map(({ id, trueName }) => (
            <option key={id} value={id}>{trueName}</option>
          ))}
        </select>
      </div>
      <div className="my-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Select a original language</label>
        <select 
          defaultValue={settingState.originalLang.lang}
          onChange={selectHandler}
          name='originalLang'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {<option value={settingState.originalLang.id}>{settingState.originalLang.trueName}</option>}
          {langs.map(({ id, trueName }) => (
            <option key={id} value={id}>{trueName}</option>
          ))}
        </select>
      </div>
      <div className="my-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">Select a translated language</label>
        <select 
          defaultValue={settingState.translatedLang.lang}
          onChange={selectHandler}
          name='translatedLang'
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          {<option value={settingState.translatedLang.id}>{settingState.translatedLang.trueName}</option>}
          {langs.map(({ id, trueName }) => (
            <option key={id} value={id}>{trueName}</option>
          ))}
        </select>
      </div>
    </Modal>
  )
}

