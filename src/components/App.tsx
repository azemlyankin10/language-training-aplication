import { RecoilRoot } from "recoil";
import { ReadingPage } from "../pages/ReadingPage/ReadingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage";
import { Layout } from "./Layout/Layout";
import { ReadingCardPage } from "../pages/ReadingCardPage/ReadingCardPage";
import { VocabularyPage } from "../pages/VocabularyPage/VocabularyPage";
import { VocabularyCardsPage } from "../pages/VocabularyPage/VocabularyCardsPage/VocabularyCardsPage";
import { VocabularyQuizPage } from "../pages/VocabularyPage/VocabularyQuizPage/VocabularyQuisPage";


export const App = () => (
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<HomePage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/reading/:id" element={<ReadingCardPage />} />
          <Route path="/vocabulary" element={<VocabularyPage />} />
          <Route path="/vocabulary/cards" element={<VocabularyCardsPage />} />
          <Route path="/vocabulary/quiz" element={<VocabularyQuizPage />} />
          
        </Route>
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
)

