import { useRecoilValue } from "recoil"
import { settingsState } from "../../state/atom"

const API_KEY = 'AIzaSyBLK92-NMnWpKiq8uduewKXbVqs0C3jjpg'

export const useTranslate = () => {
  const { originalLang, translatedLang } = useRecoilValue(settingsState)

  const translate = async (word: string) => {
    
    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`
    url += '&q=' + encodeURI(word)
    url += `&source=${originalLang.lang}`
    url += `&target=${translatedLang.lang}`
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      const { data: { translations } } = await res.json();
      return translations[0].translatedText;
    } catch (error) {
      console.log("There was an error with the translation request: ", error);
    }
  }

  return { translate }
}