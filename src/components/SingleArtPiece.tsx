import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CollectionContext from "../context/CollectionContext";
import SingleArt from "../models/SingleArt";
import "./SingleArtPiece.css";

interface Props {
  art: SingleArt;
}

const SingleArtPiece = ({ art }: Props) => {
  const { addCollection, removeCollection, isCollection } =
    useContext(CollectionContext);
  const { user } = useContext(AuthContext);
  const addArtToCollection = (art: SingleArt, uid: string) => {
    art.uid = uid;
    addCollection(art);
  };

  return (
    <li className="SingleArtPiece">
      <h2>{art.name}</h2>
      <Link to={`/${encodeURIComponent(art.name)}/details`}>
        <img src={art.image_url} alt={art.name} />
      </Link>
      {user && (
        <div>
          {isCollection(art._id!) ? (
            <button
              onClick={() => removeCollection(art._id!, user.uid)}
              className="fa-solid fa-square-minus"
              title="Remove from Collection"
            ></button>
          ) : (
            <button
              onClick={() => addArtToCollection(art, user.uid)}
              className="fa-solid fa-palette art-icon"
              title="Add to your Collection"
            ></button>
          )}
        </div>
      )}
    </li>
  );
};

export default SingleArtPiece;
