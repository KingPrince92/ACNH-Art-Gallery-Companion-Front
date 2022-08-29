import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CollectionsContext from "../context/CollectionContext";
import "./Collection.css";
import SingleArtPiece from "./SingleArtPiece";

const Collection = () => {
  const { collection } = useContext(CollectionsContext);
  const artLogo = require("../assets/Art_Plaque_NH_Icon.png");
  return (
    <div className="Collection">
      <div className="info">
        <img src={artLogo} alt="art plaque"></img>
        <p>
          Here is where you can see the art pieces you have collected. There are
          43 pieces total. See if you can collect them all!{" "}
        </p>
      </div>
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
