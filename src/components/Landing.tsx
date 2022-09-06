import { Link, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import "./Landing.css";

const museumEntrance = require("../assets/MuseumEntrance.jpg");
const Gallery1 = require("../assets/Gallery1.jpg");
const Gallery2 = require("../assets/Gallery2.jpg");
const Gallery3 = require("../assets/Gallery3.jpg");
const Gallery4 = require("../assets/Gallery4.jpg");
const Gallery5 = require("../assets/Gallery5.jpg");
const Gallery6 = require("../assets/Gallery6.jpg");
const Gallery7 = require("../assets/Gallery7.jpg");
const Gallery8 = require("../assets/Gallery8.jpg");
const Gallery9 = require("../assets/Gallery9.jpg");
const Gallery10 = require("../assets/Gallery10.jpg");
const Gallery11 = require("../assets/Gallery11.jpg");

const Landing = () => {
  return (
    <div className="Landing">
      <Carousel>
        <img src={museumEntrance} alt="Museum Entrance" />
        <img src={Gallery1} alt="Gallery1" />
        <img src={Gallery2} alt="Gallery2" />
        <img src={Gallery3} alt="Gallery3" />
        <img src={Gallery4} alt="Gallery4" />
        <img src={Gallery5} alt="Gallery5" />
        <img src={Gallery6} alt="Gallery6" />
        <img src={Gallery7} alt="Gallery7" />
        <img src={Gallery8} alt="Gallery8" />
        <img src={Gallery9} alt="Galler9" />
        <img src={Gallery10} alt="Gallery10" />
        <img src={Gallery11} alt="Gallery11" />
      </Carousel>

      <div className="flexbuttons">
        <Link to="/gallery" className="landingbuttons">
          Gallery
        </Link>
        <Link to="/mycollection" className="landingbuttons">
          My Collection
        </Link>
        <Link to="/wishlist" className="landingbuttons">
          My Wishlist
        </Link>
        <Link to="/quiz" className="landingbuttons">
          Quiz
        </Link>
        <Link to="/aboutus" className="landingbuttons">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Landing;
