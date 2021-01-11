import { BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar" aria-label="Main Menu">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <Link to="/">Map</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/list">List</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/settings">Settings</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
