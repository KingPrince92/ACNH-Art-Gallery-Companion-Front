import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Collection.css";
import SingleArtPiece from "./SingleArtPiece";

const Collection = () => {
  const { collection } = useContext(AuthContext);
  const artLogo = require("../assets/Art_Plaque_NH_Icon.png");
  console.log(collection);
  return (
    <div className="Collection">
      <div className="info">
        <img src={artLogo} alt="art plaque"></img>
        <p>
          Here is where you can see the art pieces you have collected. There are
          43 pieces total. See if you can collect them all!.{" "}
        </p>
        <p>
          You have collected{" "}
          <b className="collectionLength">{collection.length}</b> out of 43
          pieces.
        </p>
      </div>
      {collection.length >= 1 ? (
        <ul>
          {collection.map((item) => (
            <SingleArtPiece art={item} key={item.name} />
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
