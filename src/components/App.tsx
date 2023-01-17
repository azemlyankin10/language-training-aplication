import { RecoilRoot } from "recoil";
import { ReadingPage } from "../pages/ReadingPage/ReadingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage";
import { CardPage } from "../pages/ReadingPage/CardPage/CardPage";
import { Layout } from "./Layout/Layout";


export const App = () => (
  <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Layout/>}>

          <Route index element={<HomePage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/reading/:id" element={<CardPage />} />

        </Route>
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
)

