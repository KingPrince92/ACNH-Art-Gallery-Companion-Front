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
        <div className="dropdown">
          <button className="dropbtn">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <ul className="dropdown-content">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
            <Link to="/mycollection">
              <li>Your Collection</li>
            </Link>
            <Link to="/wishlist">
              <li>Your Wishlist</li>
            </Link>
            <Link to="/quiz">
              <li>Quiz</li>
            </Link>
            <Link to="/leaderboard">
              <li>Leaderboard</li>
            </Link>
            <Link to="/aboutus">
              <li>About Us</li>
            </Link>
            {/* <a href="/">Home</a>
            <a href="/gallery">Gallery</a>
            <a href="/mycollection">My Collection</a>
            <a href="/wishlist">My Wishlist</a>
            <a href="/quiz">Quiz</a>
            <a href="/leaderboard">Leaderboards</a>
            <a href="/aboutus">About Us</a> */}
          </ul>
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
