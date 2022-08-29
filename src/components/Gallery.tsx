import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleArt from "../models/SingleArt";
import { getArtGallery } from "../services/artService";
import "./Gallery.css";
import SingleArtPiece from "./SingleArtPiece";

const Gallery = () => {
  const [art, setArt] = useState<SingleArt[]>([]);
  useEffect(() => {
    getArtGallery().then((response) => {
      setArt(response);
    });
  }, []);
  return (
    <div className="Gallery">
      <Link to="/mycollection" className="collection">
        See art pieces you've collected{" "}
        <i className="fa-solid fa-palette art-icon" />
      </Link>
      <ul>
        {art.map((item) => (
          <SingleArtPiece art={item} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
