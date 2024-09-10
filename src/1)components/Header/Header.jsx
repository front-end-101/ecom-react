import { useState } from "react";
import "./Header.css";
import Profile from "../Profile/Profile";

export default function Header(props) {
  const { isLogin, setIsLogin } = props;

  const [name, setName ] = useState('JS');

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };


  return (
    <header>
      <nav className="nav">
        <h4>{name}</h4>
        <Profile/>
        <button onClick={() => setName('React')}>SetName</button>
        <h1>{isLogin ? 'User is logged in' : 'Please log in'}</h1>
        {isLogin ? (
          <button className="btn" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="btn" onClick={handleLogin}>Login</button>
        )}
      </nav>
    </header>
  );
}
