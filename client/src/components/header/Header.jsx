import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  return (
    <div>
      <Link to="/">
        <h1 className="appTitle"> TravelX</h1>
      </Link>
    </div>
  );
}

export default Header;
