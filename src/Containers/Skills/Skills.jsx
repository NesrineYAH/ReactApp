import React from "react";
import { useTranslation } from "react-i18next";
import MySkills from "../../components/MySkills/MySkills";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';


gsap.registerPlugin( ScrollToPlugin, ScrollTrigger);





const Skills = () => {
    const { t } = useTranslation();
    // 22/10 - 27/10
    const textRef = useRef(null);
    
    useEffect(() => {
        const timeline =gsap.timeline({ repeat: -1});
        
        const chars =Array.from(textRef.current.querySelectorAll(' .display-dots'));
        
        timeline.from(chars, {opacity: 0, stagger: 0.5})
        .to(chars, {opacity: 1, stagger: 0.5, delay: 0})
        .from(chars.reverse(), {opacity: 1, stagger: 0.5})
        .to(chars.reverse(), {opacity: 0, stagger: 0.5, delay: 0})
        return () => {
            timeline.kill();
        };
    }, []);

const slideInTop = (elem) => {
    gsap.fromTo(elem,
        {
          y:300,
          opacity:0,
        },
        {
            y:0,
            opacity:1,
            delay:.2,
            duration:1,
            scrollTrigger: {
                trigger: elem,
                start: "top center",
                end: "bottom center", 
            },
        }
        )
}
const fullfillBars =(elem, options) => {
    gsap.fromTo(
        elem,
        {
            opacity: 1,
            width: "0%",
        },
        {
            opacity: 1, 
            width: options,
            delay: 1,
            duration: 2,
            ease: "power4",
            scrollTrigger: {
                trigger: elem,
                start: "-500 center",
                end: "bottom center",
            }
        }
    )
}
useEffect(() => {
    slideInTop("#skills");
})
  
   
    return (
        <section id="Skills"> 
       <div id={t("skills_id")} className="SkillsBloc">
            <h1 className="titleCom">{t("skills_title")}
            <span ref={textRef}><span className='display-dots'></span></span>  
            </h1>
        <MySkills />
          
        </div>
        </section>
    );

   
    };

export default Skills;

