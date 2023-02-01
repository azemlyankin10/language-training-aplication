import { Card } from "../../components/Card/Card";
import { PageTitle } from "../../components/PageTitle/PageTitle";

export const VocabularyPage = () => (
  <>
    <PageTitle title="vocabulary" />
    <div className='mx-auto max-w-7xl py-10 sm:px-6 lg:px-8 grid grid-cols-4 gap-10'>
      <Card title='Cards' desc='Learn new words' link='/vocabulary/cards' img='https://m.media-amazon.com/images/I/41v+ECR5-cL._AC_.jpg' />
      <Card title='Quiz' desc='Train words' link='/vocabulary/quiz' img='https://img.freepik.com/premium-vector/quiz-text-speech-symbols-concept_149152-641.jpg?w=2000' />
    </div>
  </>

)