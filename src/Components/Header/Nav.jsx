import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>Home</Link>
      </li>

      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>About Us</Link>
      </li>      

      <li>
        <Link to="/service" onClick={() => setMobileToggle(false)}>Services</Link>
      </li>      

      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>Contact</Link>
      </li>
    </ul>
  );
}
