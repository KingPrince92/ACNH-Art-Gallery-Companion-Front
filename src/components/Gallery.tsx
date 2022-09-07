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
        <Link to="/wishlist" className="collection">
          My Wishlist <i className="fa-solid fa-bookmark" />
        </Link>
        <SearchArtForm />
      </div>
      <div className="galleryInfo">
        <h3>Welcome to the Gallery!</h3>
        <p>
          Below, you can see all of the art pieces available to donate to your
          museum.{" "}
        </p>
        <p>
          Once you've collected a piece, add it to your Collection with the{" "}
          <i
            className="fa-solid fa-palette art-icon"
            title="Add to your Collection"
          ></i>{" "}
          button.
        </p>
        <p>
          You're able to add pieces you're looking for with the{" "}
          <i
            className="fa-regular fa-bookmark"
            title="Add to your Wishlist"
          ></i>{" "}
          button.
        </p>
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
