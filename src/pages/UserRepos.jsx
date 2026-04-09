import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RepoCard from "../components/RepoCard";
import { getUserRepos } from "../services/githubApi";

const UserRepos = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  const [repos, setRepos] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [sort, setSort] = useState("");
  const [language, setLanguage] = useState("");

  // fetch repos
  useEffect(() => {
    const fetch = async () => {
      const data = await getUserRepos(username);
      setRepos(data);
      setFiltered(data);
    };
    fetch();
  }, [username]);

  // extract unique languages
  const languages = [
    ...new Set(
      repos.map((repo) => repo.language).filter(Boolean)
    ),
  ];

  // filter + sort
  useEffect(() => {
    let temp = [...repos];

    if (sort === "stars") {
      temp.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sort === "forks") {
      temp.sort((a, b) => b.forks_count - a.forks_count);
    }

    if (language) {
      temp = temp.filter((r) => r.language === language);
    }

    setFiltered(temp);
  }, [sort, language, repos]);

  return (
    <div className="container">
      
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <h2>{username}'s Repositories</h2>

      <div className="controls">
       
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by</option>
          <option value="stars">⭐ Stars</option>
          <option value="forks">🍴 Forks</option>
        </select>

      
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="">All Languages</option>
          {languages.map((lang, index) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="grid">
        {filtered.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default UserRepos;
