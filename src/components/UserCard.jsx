import { Link } from "react-router-dom";
import { forwardRef } from "react";

const UserCard = forwardRef(({ user }, ref) => {
  return (
    <Link to={`/user/${user.login}`} ref={ref} className="card glass user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />

      <p className="username">{user.login}</p>

     
      <span className="repo-link">Go to repositories →</span>
    </Link>
  );
});

export default UserCard;
