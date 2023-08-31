import { BrowserRouter, Routes, Route} from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Header from "./features/Header/Header";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<CountriesPage/>}></Route>
        <Route path=":name" element={<CountryDetailsPage/>}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
