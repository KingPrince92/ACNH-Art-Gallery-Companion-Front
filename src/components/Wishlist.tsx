import { useContext } from "react";
import { Link } from "react-router-dom";
import WishlistContext from "../context/WishlistContext";
import SingleArtPiece from "./SingleArtPiece";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <div className="Wishlist">
      <div className="info"></div>
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
