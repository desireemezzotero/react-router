import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefoultLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import Details from "./pages/Details";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/chi-siamo" Component={About} />
          <Route path="/prodotti" Component={Products} />
          <Route path="/dettagli-post/:id" Component={Details} />
          <Route path="/nuovo-post" Component={NewProduct} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
