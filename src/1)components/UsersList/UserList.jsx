import { useEffect, useState } from "react";
import "./UserList.css";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // async await
    const fetchUserList = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUserList(data);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setUserList([])
      }finally{
          setLoading(false);
      }
    };


  // then catch

//   function fetchD() {
//     const fetchData = fetch("https://jsonplaceholder.typicode.com/users");

//     fetchData
//       .then((res) => res.json())
//       .then((data) => {
//         setUserList(data);
//         setError(false);
//       })
//       .catch((err) => {
//         setError(true);
//         setUserList([]);
//       });
//   }

  useEffect(() => {
    fetchUserList()
  }, []);

  return (
    <div>
      <h1>User list</h1>
      <h2 style={{ fontSize: "100px" }}>{loading && "Loading...."}</h2>
      <h2>{error && "Something went wrong !"}</h2>
      <ul>
        {userList.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
