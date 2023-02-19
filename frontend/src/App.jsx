import Home from "./pages/Home";
import DetailBook from "./pages/DetailBook";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailBook/:id" element={<DetailBook />} />
        <Route path="/dashboard" element={<Admin />} />
      </Routes>
    </>
    // <Home />
  );
}

export default App;
