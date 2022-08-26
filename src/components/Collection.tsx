import { useContext } from "react";
import CollectionsContext from "../context/CollectionContext";
import "./Collection.css";
import SingleArtPiece from "./SingleArtPiece";

const Collection = () => {
  const { collection } = useContext(CollectionsContext);
  console.log(collection);
  return (
    <div className="Collections">
      {collection.map((item) => (
        <SingleArtPiece art={item} />
      ))}
    </div>
  );
};

export default Collection;
