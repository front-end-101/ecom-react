
import { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Footer.css";

export default function Footer(props) {
  const data = useContext(ThemeContext);
  console.log('data', data);

  return (
    <footer className={props.isLogin ? 'footer-login' : 'footer-logout'}>
      <h2>Footer</h2>
    </footer>
  );
}
