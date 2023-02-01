import { nanoid } from "nanoid";
import { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { settingsState } from "../../state/atom";
import { typeLang } from "../types";

export const useSpeechSynthesis = () => {
  const [langs, setLangs] = useState([
    {
      trueName: '',
      id: '',
      lang: '',
      name: ''
    }
  ])
  const { voiceLang } = useRecoilValue(settingsState)
  const synth = useRef<any>();
  
  const updateLangs = () => {
    const allLangs = synth.current?.getVoices()
    const changedAllLangsArray = allLangs
      .filter((el: any) => {
        if (el.lang === 'uk-UA') return el
        if (el.lang === 'en-US' && el.name === 'Google US English') return el
        if (el.lang === 'ru-RU' && el.name === 'Google русский') return el
        if (el.lang === 'nl-NL' && el.name === 'Google Nederlands') return el
        return null
      })
      .map((el: typeLang) => {
        let trueName = ''
        switch (el.lang) {
          case 'uk-UA':
            trueName = 'Ukrainian'
            break
          case 'en-US':
            trueName = 'English'
            break
          case 'ru-RU':
            trueName = 'Russian'
            break  
          case 'nl-NL':
            trueName = 'Dutch'
            break
          default:
            break;
        }
        return {
          trueName,
          id: nanoid(),
          lang: el.lang,
          name: el.name
        }
      })
    setLangs(changedAllLangsArray)
  }

  const getLang = (id: string) => (
    langs.find((el) => el.id === id)
  )
  
  const speak = (text: string, pitch = 1, rate = 1) => {
    const voices = synth.current?.getVoices()
    const voice = voices.find((el:any) => (el.lang === voiceLang.lang && el.name === voiceLang.name))
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