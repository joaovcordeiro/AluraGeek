import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";

import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
