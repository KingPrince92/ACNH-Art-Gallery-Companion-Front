import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import CollectionContext from "../context/CollectionContext";
import SingleArt from "../models/SingleArt";
import { addToCollection } from "../services/collectionsService";
import "./SingleArtPiece.css";

interface Props {
  art: SingleArt;
}

const SingleArtPiece = ({ art }: Props) => {
  const { addCollection } = useContext(CollectionContext);
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
          <button onClick={() => addArtToCollection(art, user.uid)}>Add</button>
          <button>Remove</button>
        </div>
      )}
    </li>
  );
};

export default SingleArtPiece;
