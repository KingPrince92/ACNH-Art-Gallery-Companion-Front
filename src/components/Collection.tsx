import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CollectionsContext from "../context/CollectionContext";
import "./Collection.css";
import SingleArtPiece from "./SingleArtPiece";

const Collection = () => {
  const { collection } = useContext(CollectionsContext);
  return (
    <div className="Collection">
      {collection.length >= 1 ? (
        <ul>
          {collection.map((item) => (
            <SingleArtPiece art={item} />
          ))}
        </ul>
      ) : (
        <p className="message">
          No collection here yet! Try adding some pieces from the{" "}
          <Link to="/gallery" className="landingbuttons">
            Gallery
          </Link>
        </p>
      )}
    </div>
  );
};

export default Collection;
