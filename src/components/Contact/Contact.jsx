import React from 'react';


class filtre extends React.Component {

    constructor(props) {
        super(props);
        this.handleFiltreSelect = this.handleFiltreSelect.bind(this);
        this.state = {isToggle: false};
    }

    handleFiltreSelect(){
        this.setState({ isToggle: true});
    }

    render () { 
        const isToggle = this.state.isToggle;
        if (isToggle) {
    <div onFiltreChange={this.handleFiltreSelect}>
    </div>
        }
      return (
        <div>
     <select className="filtre" onChange={handleFiltreSelect}>
        <option value={t("all")}></option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Logiciel">{t("software")}</option>
        <option value="Mobile">{t("Mobile")}</option>
      </select>  
        </div>
    );   
    }
   
};

export default filtre;