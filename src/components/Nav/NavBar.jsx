import './NavBar.css';
import CloseIcon from "../../icons/Close";

export default function NavBar(props) {
  return (
    <nav className={`nav ${props.isMenuOpen ? 'open' : ''}`}>
      <div className="nav__header">
        <button className="nav__close-btn" onClick={props.closeHandler}>
          <CloseIcon/>
        </button>
      </div>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
      </ul>
    </nav>
  );
}
