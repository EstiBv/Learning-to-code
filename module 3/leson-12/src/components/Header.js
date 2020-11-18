import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="List-links">
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/relax">Relax</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
