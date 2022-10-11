import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductsPage from "./Pages/ProductsPage";
import AddProductsPage from "./Pages/AddProductsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products-home" element={<ProductsPage />} />
          <Route path="/products" element={<AddProductsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
