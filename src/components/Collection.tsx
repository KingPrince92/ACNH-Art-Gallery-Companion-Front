import { useContext } from "react";
import CollectionsContext from "../context/CollectionContext";
import "./Collection.css";
import SingleArtPiece from "./SingleArtPiece";

const Collection = () => {
  const { collection } = useContext(CollectionsContext);
  return (
    <div className="Collections">
      <ul>
        {collection.map((item) => (
          <SingleArtPiece art={item} />
        ))}
      </ul>
    </div>
  );
};

export default Collection;
