import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import SingleArt from "../models/SingleArt";
import { getArtByName } from "../services/artService";
import "./Details.css";
import Gallery from "./Gallery";
import SingleArtPiece from "./SingleArtPiece";

const Details = () => {
  const name: string | undefined = useParams().name;
  console.log(name);
  const [art, setArt] = useState<SingleArt | null>(null);

  useEffect(() => {
    getArtByName(name!).then((response) => {
      setArt(response);
    });
  }, [name]);

  return (
    <div className="Details">
      <button>Fake</button>
      <h2>{art?.name}</h2>
      <img src={art?.image_url} alt={art?.name}></img>
      <p>Original Name: {art?.art_name}</p>
      <p>By: {art?.author}</p>
      <p>Year: {art?.year}</p>
      <p className="description">{art?.description}</p>
    </div>
  );
};

export default Details;
