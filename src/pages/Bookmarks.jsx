import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RepoCard from "../components/RepoCard";

const Bookmarks = () => {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(savedBookmarks);
  }, []);

  return (
    <div className="container">
    
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>Bookmarked Repositories</h1>
      {bookmarks.length === 0 ? (
        <p className="empty-message">No bookmarked repositories yet.</p>
      ) : (
        <div className="grid">
          {bookmarks.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;