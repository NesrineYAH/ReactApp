import React from 'react';
import { ReactComponent as Sun } from "../../assets/images/bakground/Sun.svg";
import { ReactComponent as Moon } from "../../assets/images/bakground/Moon.svg";

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem('selectedTheme', "dark");
    };
    const setLightMode =() => {
        document.querySelector("body").setAttribute("data-theme", "Light");
        localStorage.setItem("selectedTheme", "Light");
    };

const selectedTheme = localStorage.getItem("selectedTheme");
if(selectedTheme === "dark") {
    setDarkMode();
} 

const toggleTheme =(e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
};

    return (
        <div className="dark_mode"> 
         <input className="dark_mode_input" type="checkbox" id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"} />  

<label className="dark_mode_label"
htmlFor="darkmode-toggle"
  aria-label="Changer le mode sombre"
>
<Sun />
<Moon />
</label>
        </div>
    );
};

export default DarkMode;