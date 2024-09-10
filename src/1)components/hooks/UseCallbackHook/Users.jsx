import { useCallback, useState } from "react";
import Search from "./Search";

const usersData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
  },
];

const Users = () => {
  const [users, setUsers] = useState(usersData);
  const [theme, setTheme] = useState(true);

  const handleSearch = useCallback((query) => {
    console.log(users[0]);
    const filter = usersData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setUsers(filter);
  },[users]);

  return (
    <div>
      <button onClick={() => setTheme((prev) => !prev)}>
        {theme ? "Dark" : "Light"}
      </button>
      <Search handleSearch={handleSearch} />
      <ul>
        {users.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
