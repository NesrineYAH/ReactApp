/*import React, { useState } from "react";
//const regexName = new RegExp(/^[a-zA-ZÀ-ÿ]{2,35}([-' ,][a-zA-ZÀ-ÿ]+)*$/i);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    let isValid = true;
    const newErrors = { name: "", email: "", phoneNumber: "" };

    // Validate name
    if (!nameRegex.test(formData.name)) {
      newErrors.name =
        "Le nom ne doit contenir que des lettres et des espaces.";
      isValid = false;
    }

    // Validate email
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez saisir une adresse e-mail valide.";
      isValid = false;
    }

    // Validate phone number
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Le numéro de téléphone doit contenir 10 chiffres.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Envoyer les données du formulaire
      console.log("Formulaire valide, soumission des données :", formData);
      // Ajoutez ici le code pour envoyer les données du formulaire à votre backend ou effectuer d'autres actions.
    } else {
      console.log("Le formulaire contient des erreurs. Veuillez le corriger.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="error">{errors.name}</div>
      </div>

      <div>
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="error">{errors.email}</div>
      </div>

      <div>
        <label>Numéro de téléphone :</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <div className="error">{errors.phoneNumber}</div>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
*/

/*
export class TxtRotate extends Component {
    constructor(props) {
      super(props);

      this.state = {
        toRotate: JSON.parse(props.toRotate),
        loopNum: 0,
        txt: '',
        isDeleting: false,
        translations: {},
      };

    }
  
    componentDidMount() {
      setTimeout(() => {
      this.tick();
      }, 3000)
    }
  
    tick() {
      const { t } = this.props; 
      const { toRotate, loopNum, txt, isDeleting } =this.state;
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];
    
      if (isDeleting) {
        this.setState({ txt: fullTxt.substring(0, txt.length - 1) });
      } else {
        this.setState({ txt: fullTxt.substring(0, txt.length + 1) });
      }
  
      let delta = 300 - Math.random() * 100;
      const that = this;
      
      if (isDeleting) {
        delta /= 2;
      }
  
      if (!isDeleting && txt === fullTxt) {
        this.setState({ isDeleting: true });
        delta = this.props.period;
      } else if (isDeleting && txt === '') {
        this.setState(prevState => ({
          isDeleting: false,
          loopNum: prevState.loopNum + 1,
          txt: '',
        }));
        delta = 1000;
      }
      setTimeout(() => {
        that.tick();
      }, delta);
    }
  
  render() {
    const { t } = this.props; 
    const lang = localStorage.getItem("i18nextLng");
    return ( 
 
     <span className="txt-rotate">
 <span className="wrap">{this.state.txt}</span>
    </span>

    );
  }
}


class TxtToDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      h1Text: '',
      h2Text: '', 
      translations: {}                                
    }

    this.h1Ref = React.createRef();
    this.h2Ref = React.createRef();
  }

  typeEffect(text, speed, setStateKey) {
    let j = 0;
  
    let timer = setInterval(() => {
      if (j < text.length) {
        const lastChar = text.charAt(j);
       // console.log(lastChar);
        this.setState(prevState => ({
          [setStateKey]: prevState[setStateKey].slice(0, j-1) + lastChar,
        }));
        j+=1;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  componentDidMount() {
    const speed = 100;
    const h1 = this.h1Ref.current;
    const h2 = this.h2Ref.current;

    const h1Text = "Nesrine BEKKAR YAHOUM";
    const h2Text = "développeur web - intégrateur";
    const h1Delay = h1Text.length * speed;

    this.setState({  
      h1Text: '',
      h2Text: '',
  
    });

    setTimeout(() => {
      this.typeEffect(h1Text, speed,'h1Text');
    }, 1000);
    
    setTimeout(()=> {
      this.typeEffect(h2Text, speed, 'h2Text');
    }, 1000 + h1Delay)

    h1.classList.remove("hidden");

    setTimeout(() => {
      h2.classList.remove("hidden");
    }, h1Delay);

  }


  render() {
    const { t } = this.props; 
    return (

    <div className='txt-display'>        
    <h1 ref={this.h1Ref} className='hidden'>{(this.state.h1Text)}</h1>
    <h2 ref={this.h2Ref} className='hidden'>{(this.state.h2Text)}</h2>
    </div>
  
    )
  }
}

class About extends Component {
  render() {
    const lang = localStorage.getItem("i18nextLang");
    const { t } = this.props;  

    return (
      <section>
        <div id="About">
          <div className="presentation">
            <p>Bonjour {' '}
      <TxtRotate
        toRotate='["tout le monde!", "Visiteur !", "Recruteur ?!"]'
        period="3000"
            />
              <span className='wrap-border'>
                |
              </span>
            </p>  

      
            <button  className="glow-on-hover"><a href={t("Profil_path")} onClick={this.handleLinkClick}>{t("txtInfo")}</a></button>
            </div>
            </div>
          </section>
        )
      }
    }
    
    About.propTypes = {
      t: PropTypes.func.isRequired,
    }
    
    
    export default withTranslation()(About);
 */
