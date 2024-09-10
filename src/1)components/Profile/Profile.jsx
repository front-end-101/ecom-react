import { useState } from "react";
import Menu from "../Menu/Menu";
import "./Profile.css";

const Profile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () =>{
    setMenuOpen(prev => !prev)
  }

  console.log("Rendered")
  return (
    <div>
      <div onClick={handleMenuOpen} className="profile">DG</div>
      {menuOpen && <div className="menu">
        <Menu/>
      </div>}
    </div>
  );
};

export default Profile;
