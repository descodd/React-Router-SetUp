import "./UsersList.css";

export default function UsersLists({ currentUsers }) {
  return (
    <div className="users-list">
      <ul>
        {currentUsers.map((user) => (
          <li key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>{user.email}</p>
            <p>
              {user.location.city}, {user.location.country}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
