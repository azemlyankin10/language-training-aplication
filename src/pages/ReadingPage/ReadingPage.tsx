import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FormAddText } from "../../components/FormAddText/FormAddText";
import { ReadingCard } from "./ReadingCard/ReadingCard";
import { Select } from "../../components/Select/Select";
import { useEffect, useState } from "react";
import { typeOptions } from "../../utils/types";
import { useRecoilValue } from "recoil";
import { readingCards } from "../../state/atom";
import { changeCollection } from "../../utils/ts";

const options: typeOptions = [
  {
    id: 1,
    value: 'all'
  },
  {
    id: 2,
    value: 'favorits'
  },
  {
    id: 3,
    value: 'unread'
  },
  {
    id: 4,
    value: 'read'
  },
]

export const ReadingPage = () => {
  const [selected, setSelected] = useState(options[0])
  const cards = useRecoilValue(readingCards)
  const [cardCollection, setCardCollection] = useState(cards)

  useEffect(() => {
    const updatedCollection = changeCollection(selected.value, cards)
    setCardCollection(updatedCollection)
  }, [cards, selected])

  return (
    <>
      <PageTitle title="Reading" />
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <Tabs>
          <TabList className='flex'>
            <div className="mr-auto">
              <Select
                options={options}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            <Tab className='mr-3 rounded-md p-3 bg-gray-700 hover:bg-gray-600 text-white cursor-pointer'>
              Read
            </Tab>
            <Tab className='rounded-md p-3 bg-gray-700 hover:bg-gray-600 text-white cursor-pointer'>
              Add text
            </Tab>
          </TabList>

          <TabPanel className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-4 gap-6">
              {
                cardCollection.map((card, index) => (
                  <ReadingCard key={index} card={card}/>
                ))
              }
            </div>
          </TabPanel>
          <TabPanel className="px-4 py-6 sm:px-0">
            <FormAddText />
          </TabPanel>
        </Tabs>
      </div>
    </>
  )
}
  
