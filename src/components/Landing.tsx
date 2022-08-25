import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="Landing">
      <div>
        <Link to="/gallery">Gallery</Link>
      </div>
    </div>
  );
};

export default Landing;
