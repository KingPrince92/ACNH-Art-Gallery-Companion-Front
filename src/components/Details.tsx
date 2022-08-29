import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { classicNameResolver } from "typescript";
import SingleArt from "../models/SingleArt";
import { getArtByName } from "../services/artService";
import "./Details.css";

const Details = () => {
  const name: string | undefined = useParams().name;
  const [art, setArt] = useState<SingleArt | null>(null);

  const fakeButton = require("../assets/ForgeryButton.png");

  useEffect(() => {
    getArtByName(name!).then((response) => {
      setArt(response);
    });
  }, [name]);

  const [shown, setShown] = useState(true);
  const [flipped, setFlipped] = useState(false);

  const handleClick = (): void => {
    {
      shown ? setShown(false) : setShown(true);
    }
    setFlipped(true);
    setTimeout(() => setFlipped(false), 500);
  };

  return (
    <div className="Details">
      <h2>{art?.name}</h2>
      {shown ? (
        <>
          <img
            className={`art-image${flipped ? " animation" : ""}`}
            src={art?.image_url}
            alt={art?.name}
          ></img>
          <div className="info-container">
            {art?.has_fake && (
              <img
                className="forgery"
                src={fakeButton}
                onClick={handleClick}
                alt="Fake"
              />
            )}
            <p>
              <b>Original Name:</b> {art?.art_name}
            </p>
            <p>
              <b>By:</b> {art?.author}
            </p>
            <p>
              <b>Year: </b>
              {art?.year}
            </p>
            <p className="description">{art?.description}</p>
          </div>
        </>
      ) : (
        <>
          <img
            className={`art-image${flipped ? " animation" : ""}`}
            src={art?.fake_image_url}
            alt={art?.name}
          ></img>
          <div className="info-container">
            <img
              className="forgery"
              src={fakeButton}
              onClick={handleClick}
              alt="Fake"
            />
            <p>
              <b>Original Name:</b> {art?.art_name}{" "}
              <p className="forgery-text">Fake Version</p>
            </p>
            <p>
              <b>By:</b> {art?.author}
            </p>
            <p>
              <b>Year: </b>
              {art?.year}
            </p>

            {/* forgery description */}
            <p className="description">{art?.authenticity}</p>
          </div>
        </>
      )}
      <Link to="/gallery" className="landingbuttons">
        Back to Gallery
      </Link>
    </div>
  );
};

export default Details;
