import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import UsersLists from "../components/UsersLists";
import ErrorBoundary from "../components/ErrorBoundaries";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  //   Fetch Users from randomuser.me API
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      const res = await fetch("https://randomuser.me/api/?results=20");
      const data = await res.json();
      setUsers(data.results);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  //   Loading State
  if (isLoading) {
    return <Spinner />;
  }

  //   Pagination

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const numberOfPages = Math.ceil(users.length / usersPerPage);

  return (
    <div>
      <ErrorBoundary>
        <UsersLists currentUsers={currentUsers} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Pagination
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </ErrorBoundary>
    </div>
  );
}
