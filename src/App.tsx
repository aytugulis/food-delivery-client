import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<h1>123</h1>} />
          <Route path="/test" element={<h1>123</h1>} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
