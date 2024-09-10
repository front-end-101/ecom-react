import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import UserList from "./components/UsersList/UserList";
import Todo from "./components/Todo/Todo";

export default function App() {
  const [isLogin,setIsLogin] = useState(false);

  return (
    <div className="container">
      <Header isLogin={isLogin} setIsLogin={setIsLogin}/>
      <div className="main">
        <aside>Sidebar</aside>
        <main>
            <UserList/>
            <Todo/>
        </main>
      </div>
      <Footer isLogin={isLogin} />
    </div>
  );
}

// rendering list in react
// conditional rendering
// how to pass data from parent to child
// useState hook
// event listener in react
// parent child rerendering