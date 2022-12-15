import { Link } from "react-router-dom";
import "./Header.css";
// import TravelXlogo from "../images/TravelX.png";

function Header() {
  return (
    <div>
      <Link to="/" id="title">
        {/* <h1 className="appTitle">
          <img src={TravelXlogo} alt="TravelXlogo" />
        </h1> */}
        TravelX
      </Link>
    </div>
  );
}

export default Header;
