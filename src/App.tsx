import { RecoilRoot } from "recoil";
import { Navigation } from "./components/Navigation/Navigation";
import { ReadingPage } from "./pages/ReadingPage/ReadingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage/HomePage";
import { CardPage } from "./pages/ReadingPage/CardPage/CardPage";

export const App = () => (
  <BrowserRouter>
    <RecoilRoot>

      <Navigation/>
      
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/reading"
          element={<ReadingPage />}
        />
        <Route
          path="/reading/:id"
          element={<CardPage />}
        />
      </Routes>

    </RecoilRoot>
  </BrowserRouter>
)

// function ErrorPage() {
//   return <div>Error page</div>
// }