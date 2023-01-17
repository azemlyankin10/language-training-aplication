import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { settingsState } from "../../state/atom";
import { typeLang } from "../types";

export const useSpeechSynthesis = () => {
  const [langs, setLangs] = useState([])
  const { voiceLang } = useRecoilValue(settingsState)
  const synth = useRef<any>();
  
  const updateLangs = () => {
    const allLangs = synth.current?.getVoices()
    const changedAllLangsArray = allLangs.map((el: typeLang) => {
      return {
        id: nanoid(),
        lang: el.lang,
        name: el.name
      }
    })
    setLangs(changedAllLangsArray)
  }

  const getLang = (id: string) => (
    langs.find((el: typeLang) => el.id === id)
  )
  
  const speak = (text: string, pitch = 1, rate = 1) => {
    const index = langs.findIndex((el: typeLang) => el.name === voiceLang.name)
    const voice = synth.current?.getVoices()[index]
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice
    utterance.pitch = pitch;
    utterance.rate = rate;
    synth.current?.speak(utterance);
  }
  
  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser doesn't support text to speech!");
      return;
  }
    if (typeof window !== 'object' || !window.speechSynthesis) return
    synth.current = window.speechSynthesis
    synth.current.onvoiceschanged = updateLangs
    updateLangs();
    
    return () => {
      synth.current.onvoiceschanged = null
    }
  }, [])

  return { langs, getLang, speak }
}