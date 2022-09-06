import { useContext, useEffect } from "react";
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
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/mycollection">My Collection</a>
            <a href="/wishlist">My Wishlist</a>
            <a href="/quiz">Quiz</a>
            <a href="/leaderboard">Leaderboards</a>
            <a href="/aboutus">About Us</a>
          </div>
        </div>
        <h1 className="Welcome">Welcome to the Museum!</h1>
        {user ? (
          <li className="removelist">
            <button onClick={signOut} className="signinout">
              Sign Out
            </button>
          </li>
        ) : (
          <li className="removelist">
            <button onClick={signInWithGoogle} className="signinout">
              Sign In
            </button>
          </li>
        )}{" "}
      </div>
      <div className="pillar2"> </div>
    </div>
  );
};

export default Header;
