import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import SingleArt from "../models/SingleArt";
import { getArtGallery } from "../services/artService";
import "./Gallery.css";
import SearchArtForm from "./SearchArtForm";
import SingleArtPiece from "./SingleArtPiece";

const Gallery = () => {
  const [art, setArt] = useState<SingleArt[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query") || "";
  console.log(searchTerm);
  useEffect(() => {
    getArtGallery().then((response) => {
      setArt(response);
    });
  }, []);
  return (
    <div className="Gallery">
      <div className="searchandcoll">
        <Link to="/mycollection" className="collection">
          My Collection <i className="fa-solid fa-palette art-icon" />
        </Link>
        <SearchArtForm />
      </div>
      <ul>
        {art
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item) => (
            <SingleArtPiece art={item} key={item.name} />
          ))}
      </ul>
    </div>
  );
};

export default Gallery;
