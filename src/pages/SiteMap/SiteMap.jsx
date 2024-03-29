import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from "react-i18next";


const Sitemap = () => {
    const { t } = useTranslation();

    useEffect(() => {
        gsap.fromTo(
            ".popup",
            {opacity:0,
        },
        {
            opacity:1,
            duration: 1,
        }
        )
    }, [])

    return (
        <div id="sitemap">
            <h1 className="title" style={{fontSize: '40px', marginBottom:'30px'}}>{t('plan')}</h1>
         <ul className='sitemap__ul'> 
                  <a href="https://nesrinebekkar.com" target="_blank" rel="noopener noreferrer"><li> {t("home_title")} </li> </a> 

                 <a href={`../MentionLegales/#mentionsLegales`}  rel="noopener noreferrer"><li> {t('Mentions')} </li></a>
             <a href={`../../SiteMap/#sitemap`}  rel="noopener noreferrer"> <li> {t('plan')} </li></a>
                       
     </ul>
        </div>
    )
}
export default Sitemap;