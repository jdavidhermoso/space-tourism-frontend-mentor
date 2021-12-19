import './HeaderBar.css';
import {Component} from "react";
import NavBar from "../Nav/NavBar";
import Logo from "../../icons/Logo";
import MenuToggler from "../../icons/MenuToggler";

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.setState(() => ({
      isMenuOpen: !this.state.isMenuOpen
    }));
  }

  render() {
    return (
      <>
        <NavBar
          closeHandler={this.menuToggle}
          isMenuOpen={this.state.isMenuOpen}
        />
        <header className="header">
          <Logo/>
          <button className="menu__toggler" onClick={this.menuToggle}>
            <MenuToggler/>
          </button>
        </header>
      </>
    );
  }
}
