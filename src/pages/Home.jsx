import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import UserCard from "../components/UserCard";
import { searchUsers } from "../services/githubApi";
import useDebounce from "../hooks/useDebounce";

const Home = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Reset when search changes
  useEffect(() => {
    setUsers([]);
    setPage(1);
    setError("");
  }, [debouncedQuery]);

  // Fetch users
  useEffect(() => {
    if (!debouncedQuery) {
      setUsers([]);
      return;
    }

    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await searchUsers(debouncedQuery, page);

        setUsers((prev) =>
          page === 1
            ? data.items || []
            : [...prev, ...(data.items || [])]
        );
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [debouncedQuery, page]);

  // Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !loading &&
        !error
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, error]);

  return (
    <div className="container">
      {/* Header */}
      <div className="home-header">
        <h1>GitHub Explorer</h1>
        <p className="subtitle">
          Search and explore GitHub users and repositories
        </p>
      </div>

   
      <SearchBar query={query} setQuery={setQuery} />

      
      {!query && (
        <div className="empty-state">
          <h3 className="empty-title">Search GitHub users to begin 🔍</h3>
          <p className="empty-subtitle">
            Find developers, explore repositories, and bookmark favorites
          </p>
        </div>
      )}

     
      {error && (
        <div className="error-box">
          <p>⚠ {error}</p>
        </div>
      )}

     
      <div className="grid fade-in">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading users...</p>
        </div>
      )}

      
      {!loading && users.length === 0 && debouncedQuery && !error && (
        <div className="empty-state">
          <h3>No users found 🔍</h3>
          <p>Try searching with a different keyword</p>
        </div>
      )}
    </div>
  );
};

export default Home;