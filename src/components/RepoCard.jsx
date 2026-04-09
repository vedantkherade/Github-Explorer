import { useEffect, useState } from "react";

const RepoCard = ({ repo }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];
    setSaved(bookmarks.some((b) => b.id === repo.id));
  }, [repo.id]);

  const toggleBookmark = (e) => {
    e.stopPropagation();
    let bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (saved) {
      bookmarks = bookmarks.filter((b) => b.id !== repo.id);
    } else {
      bookmarks.push(repo);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    setSaved(!saved);
  };

  const handleCardClick = () => {
    window.open(repo.html_url, "_blank");
  };

  return (
    <div className="card glass repo-card" onClick={handleCardClick}>
    
      <h3 className="repo-title">{repo.name}</h3>

      
      <p className="repo-desc">
        {repo.description || "No description available"}
      </p>

     
      {repo.language && (
        <p className="repo-lang">{repo.language}</p>
      )}

     
      <div className="repo-stats">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>

      
      <div className="repo-footer">
        {/* BUTTON */}
        <button className="bookmark-btn" onClick={toggleBookmark}>
          {saved ? "★ Bookmarked" : "☆ Bookmark"}
        </button>

       
        <span onClick={(e) => e.stopPropagation()} className="repo-link-text">
          Go to repository →
        </span>
      </div>
    </div>
  );
};

export default RepoCard;
