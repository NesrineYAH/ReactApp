import logo from "../../assets/images/logo/logoCode.jpg";
import { Component, useRef} from "react";
import { NavLink } from "react-router-dom";
import React from "react";
//import barSolid from "../../assets/images/carrousel/bars-solid.svg";

//create a class header
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTransparent: true,
      isMobile: false,
      showLinks: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.resizeScreen = this.resizeScreen.bind(this);
  }
  //What I did is adding an event listener after component mount:
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.resizeScreen();
    window.addEventListener("resize", this.resizeScreen);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.resizeScreen);
  }
 
  resizeScreen(){
    const isMobile =window.innerWidth<768;
    this.setState({ isMobile });
};
handleScroll() {
  const isTransparent = window.scrollY < 250;
  this.setState({ isTransparent });
}
// Fonction scroll To #section au click (tempo 500ms pr rendu page avant scroll)
handleLinkClick =(event) => {
  const { hash } = event.currentTarget;
  setTimeout(() => {
    const element = document.querySelector(hash);
    console.log({ hash });
    console.log(element);

    //Scroll To ID section 
    if (element){ 
      event.preventDefault();window.scrollTo({
        top: element.offsetTop,
        behavior:"smooth",
      });
    };
    //fermer menu burger post click
    this.setState({ showLinks: false })
  }, 500);
  }



  render() {
    // Setup menu Header with state 
    const {isTransparent, isMobile, showLinks} =this.state
    // import via propos funtion retour home 
    const {handleClick} = this.props;
    //Menu ouverture et fermeture 
   const handleShowLinks =() => {
    this.setState({ showLinks: !this.state.showLinks });
   }

    return (
    <header className="header">
 <nav className={`navbar ${showLinks ? "show_nav" : ""} ${(isTransparent && !isMobile) ? 'navbar--transparent' :
''} `}>
          <div classname="header__LogoContainer">
            <img
       className="header__logo"       
              src={logo}
              alt="logo développeur web" onClick={handleClick}
            />
            {/* <img className="header__bars" src={barSolid} alt=" menu latérale" /> */}
          </div>
          <ul className="navbar__links">
            <li className="navbar_item slide1">
              <NavLink to="/#About" className="navbar_link" onClick={this.handleLinkClick}>
                Accueil
              </NavLink>
            </li>
            <li className="navbar_item slide2">
              <NavLink to="/#Profil" className="navbar_link" onClick={this.handleLinkClick}>
                Profil
              </NavLink>
            </li>
            <li className="navbar_item slide3">
              <NavLink to="/#Portfolio" className="navbar_link" onClick={this.handleLinkClick}>
                Portfolio
              </NavLink>
            </li>
            <li className="navbar_item slide4">
              <NavLink to="/#Competances" className="navbar_link" onClick={this.handleLinkClick}>
                Compétences
              </NavLink>
            </li>
            <li className="navbar_item slide5">
              <NavLink to="/#Contact" className="navbar_link"onClick={this.handleLinkClick}>
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="navbar_burger" onClick={handleShowLinks}>
                        <span className="burger_bar"></span>
          </button>
        </nav> 
    </header>
    )
    


  }

}

  
export default Header;

