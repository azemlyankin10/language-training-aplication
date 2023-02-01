import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { FormAddText } from "../../../components/FormAddText/FormAddText";
import { PageTitle } from "../../../components/PageTitle/PageTitle";
import { Select } from "../../../components/Select/Select";
import { typeReadingPageContainer } from "../../../utils/types";
import { ReadingCard } from "../ReadingCard/ReadingCard";
import { AddRandomArticleBtn } from "./AddRandomArticleBtn/AddRandomArticleBtn";

export const ReadingPageContainer = ({select, getArticleBtn, cards}: typeReadingPageContainer) => (
  <>
    <PageTitle title="Reading" />
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Tabs>
        <TabList className='flex'>
          <div className="mr-auto">
            <Select
              options={select.options}
              selected={select.selected}
              setSelected={select.setSelected}
            />
          </div>
          <div className="flex items-center justify-center mb-3">

            <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
              <Tab className="rounded-l inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out cursor-pointer">
                Read
              </Tab>

              <Tab className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out cursor-pointer">
                Add text
              </Tab>

              <AddRandomArticleBtn getArticleBtn={getArticleBtn} text='get random article'/>

            </div>
          </div>
        </TabList>

        <TabPanel className="px-4 py-6 sm:px-0">
          
            {
              cards.length > 0 
                ? (
                  <div className="grid grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                      <ReadingCard key={index} card={card}/>
                    ))}
                  </div>
                )
                : <p 
                    className="flex justify-center mt-12 uppercase text-large text-gray-700 font-bold text-7xl"
                  >
                    No {select.selected.value} cards
                  </p>
            }
        </TabPanel>
        <TabPanel className="px-4 py-6 sm:px-0">

          <FormAddText />

        </TabPanel>
      </Tabs>
    </div>
  </>
)