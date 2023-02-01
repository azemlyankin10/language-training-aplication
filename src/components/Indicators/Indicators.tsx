import { typeIndicators, typeOfOneindicator } from "../../utils/types"


export const Indicators = ({kindsOfIndicators}: {kindsOfIndicators: typeIndicators}) => {

  return (
    <>
      {
        kindsOfIndicators.map((el, index) => indicator(el, index))
      }
    </>
  )
}

function indicator(indicator: typeOfOneindicator, index: number) {
  const colors = {
    container: '',
    round: ''
  }

  if (indicator === 'unread') {
    colors.container = 'bg-green-100 text-green-800'
    colors.round = 'bg-green-500'
  } else if (indicator === 'favorit') {
    colors.container = 'bg-yellow-100 text-yellow-800'
    colors.round = 'bg-yellow-300'
  } else if(indicator === 'read') {
    colors.container = 'bg-pink-100 text-pink-800'
    colors.round = 'bg-pink-300'
  }

  return (
    <span key={index} className={`${colors.container} inline-flex items-center text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
      <span className={`${colors.round} w-2 h-2 mr-1 rounded-full`}></span>
      {indicator}
    </span>
  )
}