import logo from "../../assets/images/logo/logoCode.jpg";
import { Component, useRef } from "react";
import { NavLink } from "react-router-dom";

//create a class header
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTransparent: true,
      isSmallScreen: false,
      showLinks: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.checkScreenSize = this.checkScreenSize.bind(this);
  }
  //What I did is adding an event listener after component mount:
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkScreenSize);
  }

  render() {
    return <header className="header"></header>;
  }
}

export default Header;

{
  /* <nav className="navbar">
          <div classname="MonLogo">
            <img
              className="header__logo"
              src={logo}
              alt="logo développeur web"
            />
            <img className="header__bars" src={barSolid} alt=" menu latérale" />
          </div>
          <ul className="navbar__links">
            <li className="navbar_item slide1">
              <NavLink to="/#About" className="navbar_link">
                Accueil
              </NavLink>
            </li>
            <li className="navbar_item slide2">
              <NavLink to="/#Profil" className="navbar_link">
                Profil
              </NavLink>
            </li>
            <li className="navbar_item slide3">
              <NavLink to="/#Portfolio" className="navbar_link">
                Portfolio
              </NavLink>
            </li>
            <li className="navbar_item slide4">
              <NavLink to="/#Competances" className="navbar_link">
                Compétences
              </NavLink>
            </li>
            <li className="navbar_item slide5">
              <NavLink to="/#Contact" className="navbar_link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav> */
}
