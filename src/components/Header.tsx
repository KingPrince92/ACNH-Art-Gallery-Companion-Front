import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <Link to="/" className="test">
          YOOOOOOO
        </Link>
      </h1>
    </div>
  );
};

export default Header;
