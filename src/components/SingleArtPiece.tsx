import { useContext, useState } from "react";
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
  const [confirmation, setConfirmation] = useState(false);
  const [shown, setShown] = useState(true);

  const addArtToCollection = (art: SingleArt) => {
    addCollection(art);
    setConfirmation(true);
    {
      shown ? setShown(false) : setShown(true);
    }
    setTimeout(() => setShown(true), 1000);
  };

  return (
    <li className="SingleArtPiece">
      <h2>{art.name}</h2>
      <Link to={`/${encodeURIComponent(art.name)}/details`}>
        <img src={art.image_url} alt={art.name} />
      </Link>
      {isCollection(art.name) ? (
        <div>
          <button
            onClick={() => {
              removeCollection(user!.uid, art.name);
            }}
            className="fa-solid fa-square-minus"
            title="Remove from Collection"
          ></button>
        </div>
      ) : (
        <div>
          {" "}
          <button
            onClick={() => addArtToCollection(art)}
            className="fa-solid fa-palette art-icon"
            title="Add to your Collection"
          >
            {" "}
          </button>
          {shown ? (
            " "
          ) : (
            <p className={`message${confirmation ? " show-message" : ""}`}>
              Added!
            </p>
          )}{" "}
        </div>
      )}
    </li>
  );
};

export default SingleArtPiece;
