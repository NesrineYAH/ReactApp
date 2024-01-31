import { useEffect } from 'react';
import { gsap } from 'gsap';


const Sitemap = () => {

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
        <div className="sitemap">
            <h3 className="title">Plan du site</h3>
            <p></p>
        </div>
    )
}
export default Sitemap;