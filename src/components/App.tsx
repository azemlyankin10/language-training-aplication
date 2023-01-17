import { RecoilRoot } from "recoil";
import { ReadingPage } from "../pages/ReadingPage/ReadingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage";
import { Layout } from "./Layout/Layout";
import { ReadingCardPage } from "../pages/ReadingCardPage/ReadingCardPage";


export const App = () => (
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<HomePage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/reading/:id" element={<ReadingCardPage />} />

        </Route>
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
)

