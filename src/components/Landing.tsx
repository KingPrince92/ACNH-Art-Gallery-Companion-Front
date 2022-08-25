import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="flexbuttons">
        <button className="landingbuttons">
          <Link to="/gallery" className="landingbuttons">
            Gallery
          </Link>
        </button>
        <button className="landingbuttons">
          <Link to="/mycollection" className="landingbuttons">
            My Collection
          </Link>
        </button>
        <button className="landingbuttons">
          <Link to="/quiz" className="landingbuttons">
            Quiz
          </Link>
        </button>
        <button className="landingbuttons">
          <Link to="/aboutus" className="landingbuttons">
            About Us
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Landing;
