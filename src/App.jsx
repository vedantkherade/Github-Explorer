import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import UserRepos from "./pages/UserRepos";
import Bookmarks from "./pages/Bookmarks";

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/bookmarks">
          <button className="bookmarks-btn">★ Bookmarks</button>
        </Link>
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserRepos />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;