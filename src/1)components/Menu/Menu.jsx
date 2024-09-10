import { useContext } from "react";
import "./Menu.css";
import { ThemeContext, UserContext } from "../../App";

const Menu = () => {
  const {isAdmin} = useContext(UserContext);
  const {isDark,setIsDark} = useContext(ThemeContext)

  return (
    <div>
      <h4>Menu</h4>
      <h5>{isAdmin ? "Admin" : "User"}</h5>
      <ul>
        <li>Settings</li>
        <li>Log in</li>
      </ul>
      <button
        style={{
          background: isDark ? "#fff" : "#333",
          color: isDark ? "#333" : "#fff",
        }}
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Menu;
