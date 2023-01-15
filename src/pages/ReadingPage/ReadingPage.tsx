import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FormAddText } from "../../components/FormAddText/FormAddText";
import { ReadingCard } from "../../components/ReadingCard/ReadingCard";
import { Select } from "../../components/Select/Select";
import { useState } from "react";
import { typeOptions } from "../../utils/types";
import { useRecoilValue } from "recoil";
import { readingCards } from "../../state/atom";


const options: typeOptions = [
  {
    id: 1,
    value: 'All'
  },
  {
    id: 2,
    value: 'Favorits'
  },
  {
    id: 3,
    value: 'Unread'
  },
]

export const ReadingPage = () => {
  const [selected, setSelected] = useState(options[0])
  const cards = useRecoilValue(readingCards)
  
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
                cards.map(({ text, indicators, id }, index) => (
                  <ReadingCard key={index} text={text} indicators={indicators} id={id}/>
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
  
