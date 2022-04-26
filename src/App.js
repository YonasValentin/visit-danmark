import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import DiscoverPage from "./pages/DiscoverPage";

function App() {
  return (
    <div className="main">
      <Nav />
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
      </Routes>
    </div>
  );
}

export default App;
