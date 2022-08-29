import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="flexbuttons">
        <Link to="/gallery" className="landingbuttons">
          Gallery
        </Link>
        <Link to="/mycollection" className="landingbuttons">
          My Collection
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
