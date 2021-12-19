import './NavBar.css';
import CloseIcon from "../../icons/Close";
import {Link} from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className={`nav ${props.isMenuOpen ? 'open' : ''}`}>
      <div className="nav__header">
        <button className="nav__close-btn" onClick={props.closeHandler}>
          <CloseIcon/>
        </button>
      </div>
      <ul className="nav__list">


        <li className="nav__item">
          <Link to="/"><span className="nav__item-number">00</span> Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="destinations">
            <span
              className="nav__item-number">01</span> Destination
          </Link>
        </li>
        <li className="nav__item">
          <Link to="crew">
            <span className="nav__item-number">02</span> Crew
          </Link>
        </li>
        <li className="nav__item">
          <Link to="technology">
            <span className="nav__item-number">03</span> Technology
          </Link>
        </li>
      </ul>
    </nav>
  );
}
