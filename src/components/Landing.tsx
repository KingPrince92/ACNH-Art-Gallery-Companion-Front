import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="Landing">
      <button>
        <Link to="/gallery">Gallery</Link>
      </button>
    </div>
  );
};

export default Landing;
