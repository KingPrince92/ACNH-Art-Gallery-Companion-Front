import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import SingleArtPiece from "./SingleArtPiece";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist } = useContext(AuthContext);
  const wishlistLogo = require("../assets/PresentNH.png");
  return (
    <div className="Wishlist">
      <div className="info">
        <img src={wishlistLogo} className="present" alt="present"></img>
        <p className="infotext">
          Here is where you can see art pieces you have added to your wishlist!
          These may be pieces needed to finish your collection, or pieces you'd
          like to have for fun.
        </p>
      </div>

      {wishlist.length >= 1 ? (
        <ul>
          {wishlist.map((item) => (
            <SingleArtPiece art={item} key={item.name} />
          ))}
        </ul>
      ) : (
        <p className="message">
          No items in your wishlist! Try adding some pieces from the{" "}
          <Link to="/gallery" className="landingbuttons">
            Gallery
          </Link>
        </p>
      )}
    </div>
  );
};

export default Wishlist;
