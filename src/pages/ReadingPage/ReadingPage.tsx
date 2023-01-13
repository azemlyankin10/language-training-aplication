import { PageTitle } from "../../components/PageTitle/PageTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FormAddText } from "../../components/FormAddText/FormAddText";

export const ReadingPage = () => (
  <>
    <PageTitle title="Reading" />
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <Tabs>
        <TabList className='flex justify-end'>
          <Tab className='mr-3 rounded-md p-3 bg-gray-700 hover:bg-gray-600 text-white cursor-pointer'>Read</Tab>
          <Tab className='rounded-md p-3 bg-gray-700 hover:bg-gray-600 text-white cursor-pointer'>Add text</Tab>
        </TabList>

        <TabPanel className="px-4 py-6 sm:px-0">
          <div>Any content 2</div>
        </TabPanel>
        <TabPanel className="px-4 py-6 sm:px-0">
          <FormAddText />
        </TabPanel>
      </Tabs>
    </div>
  </>
)