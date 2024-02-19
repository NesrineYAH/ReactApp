import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { FaDiscord } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const SocialMedia = () => {
    return (
        <ul className='socialMedia__Conatiner'>

        <li className='socialMedia__Icone'>
        <a href="https://github.com/NesrineYAH" target="_blank" rel="noreferrer" aria-label="github">
        <DiGithubBadge
            color="var(--body_color)" 
            size="40px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--background_icons)")}           
            onMouseOut={({ target }) =>
              (target.style.color = "var(--body_color)")}           
          />
        </a>
        </li>  

        <li className='socialMedia__Icone'>
        <a href="https://www.linkedin.com/in/nesrine-yahoum-16ba4590/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <TiSocialLinkedinCircular
            color="var(--body_color)"
            size="40px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--background_icons)")
            }
            onMouseOut={({ target }) =>
              (target.style.color = "var(--body_color)")
            }
          />
        </a>
        </li>  

        <li className='socialMedia__Icone discord'>
        <a href="https://discord.com/#1420" target="_blank" rel="Discord">
        <FaDiscord
            color="var(--body_color)"
            size="35px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--background_icons)")
            }
            onMouseOut={({ target }) =>
              (target.style.color = "var(--body_color)")
            }
          />
        </a>
        </li>  

        </ul>
    );
};

export default SocialMedia;