import { useEffect, useState } from "react";
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
      <ul>
        {art.map((item) => (
          <SingleArtPiece art={item} />
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
