import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { ScrollToPlugin } from 'gsap/all';
import BlobCloud from "../BlobCloud/BlobCloud";

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
        fullfillBars(".javascript_skill", "60%");
        fullfillBars(".react_skill", "70%");
        fullfillBars(".node_skill", "60%");
        fullfillBars(".sql_skill", "60%");
        fullfillBars(".Git_skill", "60%");
        fullfillBars(".Figma_skill", "60%");
        fullfillBars(".adobe_PS_skill", "50%");
        fullfillBars(".adobe_IL_skill", "50%");
    }, []);

    return (
        <section id="Skills">
           <div id={t("skills_id")} className="txtxt"> 
                <h2 className="titlePortfolio">{t("skills_title")}</h2>
                    <span ref={textRef}><span className='display-dots'>.</span><span className='display-dots'>.</span><span className='display-dots'>.</span></span>
            </div>            
            <div className="Skills__Container">
                <div className="Skills__box">
                    <div className="box">
                        <h4 className="box__title">Front-end</h4>
                        <div className="skillItem">
                            <p className="skillItem__p">HTML</p>
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled html_skill"></div>
                            </div>
                        </div>
                        <div className="skillItem">
                            <p className="skillItem__p">CSS / SCSS</p>
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled css_skill"></div>
                            </div>
                        </div>
                        <div className="skillItem">
                            <p className="skillItem__p">Bootstrap</p>
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled bootstrap_skill"></div>
                            </div>
                        </div>
                        <div className="skillItem">
                            <p className="skillItem__p">Javascript</p>
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled javascript_skill"></div>
                            </div>
                        </div>
                        <div className="skillItem">
                            <p className="skillItem__p"> React</p> 
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled react_skill"></div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h4 className="box__title">Back-end</h4>
                        <div className="skillItem">
                            <p className="skillItem__p">Node JS</p>
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled node_skill"></div>
                            </div>
                        </div>
                        <div className="skillItem">
                            <p className="skillItem__p">mySQL</p>
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled sql_skill"></div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h4 className="box__title">Design</h4>

                        <div className="skillItem">
                            <p className="skillItem__p">Figma</p>
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled Figma_skill"></div>
                            </div>
                        </div>
                        <div className="skillItem">
                            <p className="skillItem__p">Adobe Photohop</p>
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled adobe_PS_skill"></div>
                            </div>
                        </div>
                        <div className="skillItem">
                            <p className="skillItem__p">Adobe Illustrator</p>
                            <div className="skillItem__bar">
                                <div className="skillItem__bar__fullfilled adobe_IL_skill"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
            <BlobCloud />
        </section>
        
    );

};

export default MySkills;

