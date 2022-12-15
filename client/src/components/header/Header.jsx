import { Link } from "react-router-dom";
import TravelXlogo from "../images/TravelX.png";

function Header() {
  return (
    <div id="title">
      <Link to="/">
        <div id='logoContainer'>
          <img id="logo" src={TravelXlogo} alt="TravelXlogo" />
        </div>
      </Link>
    </div>
  );
}

export default Header;
