import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="Header">
      <Link to="/" className="test">
        <h1 className="bgimage"></h1>
      </Link>
      <div className="pillar1">
        {user ? (
          <li>
            <button onClick={signOut}>Sign Out</button>
          </li>
        ) : (
          <li>
            <button onClick={signInWithGoogle}>Sign In</button>
          </li>
        )}{" "}
      </div>
      1<div className="pillar2"> </div>
    </div>
  );
};

export default Header;
