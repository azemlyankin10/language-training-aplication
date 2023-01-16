import { typeOfOneindicator, typeReadingCard } from "./types";

export const classNames = (...classes: any) => classes.filter(Boolean).join(' ')

const API_KEY = 'AIzaSyBLK92-NMnWpKiq8uduewKXbVqs0C3jjpg'

export const translate = async ({word, fromLang, toLang}: { word: string, fromLang: string, toLang: string }) => {
  let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`
  url += '&q=' + encodeURI(word);
  url += `&source=${fromLang}`;
  url += `&target=${toLang}`;
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

export const countWords = (str: string): number => {
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
  return str.split(' ').length;
}

export const changeCard = (arrayWidthAllCards: typeReadingCard[], currentCardId: string, newCard: typeReadingCard) => {
  const arrWithoutCard = arrayWidthAllCards.filter(el => el.id !== currentCardId)
  const updatedArr = arrWithoutCard.concat(newCard)
  return updatedArr
}

export const deleteCard = (arrayWidthAllCards: typeReadingCard[], currentCardId: string) => (
  arrayWidthAllCards.filter(el => el.id !== currentCardId)
)

export const changeCollection = (selected: typeOfOneindicator, cards: typeReadingCard[]): typeReadingCard[] => {
  switch (selected) {
    case 'favorits':
      return cards.filter(el => el.indicators.includes('favorits'))
    case 'unread':
      return cards.filter(el => el.indicators.includes('unread'))
    case 'read':
      return cards.filter(el => el.indicators.includes('read'))
    default:
      return cards
  }
}