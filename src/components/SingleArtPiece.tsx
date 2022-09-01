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
  const { addCollection } = useContext(CollectionContext);
  const { user } = useContext(AuthContext);
  const [confirmation, setConfirmation] = useState(false);
  const [shown, setShown] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const addArtToCollection = (art: SingleArt, uid: string) => {
    art.uid = uid;
    addCollection(art);
    setConfirmation(true);
    {
      shown ? setShown(false) : setShown(true);
    }
    {
      disabled ? setDisabled(false) : setDisabled(true);
    }
    setTimeout(() => setShown(true), 1000);
  };

  return (
    <li className="SingleArtPiece">
      <h2>{art.name}</h2>
      <Link to={`/${encodeURIComponent(art.name)}/details`}>
        <img src={art.image_url} alt={art.name} />
      </Link>
      {user! && (
        <div>
          {" "}
          <button
            onClick={() => addArtToCollection(art, user.uid)}
            className={`fa-solid fa-palette art-icon${
              disabled ? " disabled" : ""
            }`}
            title="Add to your Collection"
          ></button>
          {shown ? (
            " "
          ) : (
            <p className={`message${confirmation ? " show-message" : ""}`}>
              Added!
            </p>
          )}
        </div>
      )}
    </li>
  );
};

export default SingleArtPiece;
