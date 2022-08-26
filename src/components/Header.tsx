import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="bgimage">
        <Link to="/" className="test">
          AY
        </Link>
      </h1>
      <div className="pillar1"> </div>
      <div className="pillar2"> </div>
    </div>
  );
};

export default Header;
