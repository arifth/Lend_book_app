import Home from "./pages/Home";
import DetailBook from "./pages/DetailBook";
import Admin from "./pages/Admin";
import { Routes, Route } from "react-router-dom";
import PrivateLoginAdmin from "./components/PrivateLoginAdmin";
import { API, setAuthToken } from "./config/api";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
function App() {
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  const response = async () => {
    try {
      const fetch = await API.get("/books");
      return console.log(fetch.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailBook/:id" element={<DetailBook />} />
        <Route element={<PrivateLoginAdmin isLoggedIn={true} role={"USER"} />}>
          <Route path="/dashboard" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
