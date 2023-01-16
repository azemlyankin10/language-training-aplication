import { typeReadingCard } from "../../../utils/types";
import { Indicators } from "../../../components/Indicators/Indicators";
import { LinkToOpen } from "./LinkToOpen/LinkToOpen";
import { DeleteBtn } from "./DeleteBtn/DeleteBtn";

export const ReadingCard = ({card}: {card: typeReadingCard}) => (
  <div className="relative max-w-sm p-6 bg-yellow border border-gray-200 rounded-lg shadow-md">
    <div className="absolute -top-2 right-0 flex">
      <Indicators kindsOfIndicators={card.indicators}  />
    </div>
    <p className="mb-3 font-normal text-gray-700 threeDots">
      {card.text}
    </p>
    <div className="flex justify-between">
      <LinkToOpen id={card.id} />
      <DeleteBtn card={card}/>
    </div>
  </div>
)