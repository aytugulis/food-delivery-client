import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { CardPage } from "./pages/CartPage";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CardPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
