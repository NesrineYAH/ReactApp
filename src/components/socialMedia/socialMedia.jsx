import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";

const SocialMedia = () => {
    return (
        <ul className='socialMedia__Conatiner'>

        <li className='socialMedia__icone'>
        <a href="https://github.com/NesrineYAH" target="_blank" rel="noreferrer" aria-label="github">github
        <DiGithubBadge
            color="var(--body_color)" 
            size="50px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--body_backg)")
            }
            onMouseOut={({ target }) =>
              (target.style.color = "var(--background_icons)")
            }  
          />
        </a>
        </li>  

        <li className='socialMedia__icone'>
        <a href="https://www.linkedin.com/in/nesrine-yahoum-16ba4590/" target="_blank" rel="noreferrer" aria-label="LinkedIn">link
        <TiSocialLinkedinCircular
            color="var(--body_color)"
            size="50px"
        
            onMouseOver={({ target }) =>
              (target.style.color = "var(--body_backg)")
            }
            onMouseOut={({ target }) =>
              (target.style.color = "var(--background_icons)")
            }
          />
        </a>
        </li>  

        <li className='socialMedia__icone X'>
        <a href="https://x.com/NesrineYAH87" target="_blank" rel="X">lien X
        <RiTwitterXLine 
            color="var(--body_color)"
            size="37px"
            onMouseOver={({ target }) =>
              (target.style.color = "var(--body_backg)")
            }
            onMouseOut={({ target }) =>
              (target.style.color = "var(--background_icons)")
            }
          />
        </a>
        </li>  

        </ul>
    );
};

export default SocialMedia;