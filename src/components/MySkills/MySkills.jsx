import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const MySkills = () => {
    const { t } = useTranslation();
    const textRef = useRef(null);

    useEffect(() => {
        const timeline = gsap.timeline({ repeat: -1 });
        const chars = Array.from(textRef.current.querySelectorAll(' .display-dots'));

        timeline.from(chars, { opacity: 0, stagger: 0.5 })
            .to(chars, { opacity: 1, stagger: 0.5, delay: 0 })
            .from(chars.reverse(), { opacity: 1, stagger: 0.5 })
            .to(chars.reverse(), { opacity: 0, stagger: 0.5, delay: 0 })
        return () => {
            timeline.kill();
        };
    }, []);

    const slideInTop = (elem) => {
        gsap.fromTo(elem,
            {
                y: 300,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                delay: .2,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",
                },
            }
        )
    }
    const fullfillBars = (elem, options) => {
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
        slideInTop("#Skills");
    });

    useEffect(() => {
        fullfillBars(".html_skill", "70%");
        fullfillBars(".css_skill", "75%");
        fullfillBars(".bootstrap_skill", "50%");
        fullfillBars(".javascript_skill", "70%");
        fullfillBars(".react_skill", "70%");
        fullfillBars(".node_skill", "60%");
        fullfillBars(".sql_skill", "60%");
        fullfillBars(".adobe_XD_skill", "60%");
        fullfillBars(".adobe_PS_skill", "50%");
        fullfillBars(".adobe_IL_skill", "50%");

    }, []);

    return (
        <section id="Skills">
            <div id={t("skills_id")}>
                <h2 className="titlePortfolio">{t("skills_title")}
                    <span ref={textRef}><span className='display-dots'></span><span className='display-dots'>.</span></span>
                </h2>
                <div className="Skills__Container">
               
                       {/* Frontend */}
                    <div className="box">
                        <h4 className="titreSkill">Front-end</h4>
                        <div className="skill-item">
                            <p className="skill-item__p">HTML</p>
                            <div className="skill-bar">
                                <div className="skill__bar-fullfilled html_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="skill-item__p">CSS / SCSS</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled css_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="skill-item__p">Bootstrap</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled bootstrap_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="skill-item__p">Javascript</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled javascript_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="skill-item__p"> React</p> 
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled react_skill"></div>
                            </div>
                        </div>
                    </div>
                        {/* Backend */}
                    <div className="box">
                        <h4 className="titreSkill">Back-end</h4>
                        <div className="skill-item">
                            <p className="skill-item__p">Node JS</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled node_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="skill-item__p">mySQL</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled sql_skill"></div>
                            </div>
                        </div>
                    </div>
                      {/* Logiciel */}
                    <div className="box">
                        <h4 className="titreSkill">Design</h4>
                        <div className="skill-item">
                            <p className="skill-item__p">Adobe XD</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled adobe_XD_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="skill-item__p">Adobe Photohop</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled adobe_PS_skill"></div>
                            </div>
                        </div>
                        <div className="skill-item">
                            <p className="skill-item__p">Adobe Illustrator</p>
                            <div className="skill-bar">
                                <div className="skill-bar-fullfilled adobe_IL_skill"></div>
                            </div>
                        </div>
                    </div>

                </div>
             
               </div>   
          
        </section>
    );
};

export default MySkills;

