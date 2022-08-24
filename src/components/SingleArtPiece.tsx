import SingleArt from "../models/SingleArt";
import "./SingleArtPiece.css";

interface Props {
  art: SingleArt;
}

const SingleArtPiece = ({ art }: Props) => {
  return (
    <li className="SingleArtPiece">
      <h2>{art.name}</h2>
      <img src={art.image_url} alt={art.name} />
    </li>
  );
};

export default SingleArtPiece;
