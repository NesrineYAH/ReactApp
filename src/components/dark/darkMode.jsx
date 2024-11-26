import React from 'react';
import { ReactComponent as Sun } from "../../assets/img/bakground/Sun.svg";
import { ReactComponent as Moon } from "../../assets/img/bakground/Moon.svg";
import { useState , useEffect } from 'react';
import { SyncLoader   } from 'react-spinners';


const DarkMode = () => {
    const [loading, setLoading] = useState(false);

    const setDarkMode = () => {
       setLoading(true);
       setTimeout(() => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem('selectedTheme', "dark");
        setLoading(false);
      }, 500); // Set a delay of 1000 milliseconds (adjust as needed)
    };
    const setLightMode =() => {
        setLoading(true);
        setTimeout(() => {
            document.querySelector("body").setAttribute("data-theme", "Light");
            localStorage.setItem("selectedTheme", "Light");
            setLoading(false);
          }, 500); // Set a delay of 1000 milliseconds (adjust as needed)
    };

const selectedTheme = localStorage.getItem("selectedTheme");
useEffect(() => {
    if (selectedTheme === "dark") {
      setDarkMode();
    }
  }, [selectedTheme]);


const toggleTheme =(e) => {
    if (e.target.checked) setDarkMode();        
    else setLightMode();
};

const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1,
  }

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
 {loading && (
 <SyncLoader     type="TailSpin"  className='TailSpin' size={15}  color="#9356DC" 

   animate={{ rotate: 360 }} transition={spinTransition} />   
 )} 

 <label htmlFor="dark"></label>
        </div>
    );
};

export default DarkMode;