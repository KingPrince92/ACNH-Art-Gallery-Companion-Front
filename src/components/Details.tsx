import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleArt from "../models/SingleArt";
import { getArtByName } from "../services/artService";
import "./Details.css";
import Gallery from "./Gallery";
import SingleArtPiece from "./SingleArtPiece";

const Details = () => {
  const name: string | undefined = useParams().name;
  const [art, setArt] = useState<SingleArt | null>(null);

  useEffect(() => {
    getArtByName(name!).then((response) => {
      setArt(response);
    });
  }, [art]);

  return (
    <div className="Details">
      <p>{art?.art_name}</p>
    </div>
  );
};

export default Details;
