import React from 'react';
import { Carousel } from "react-responsive-carousel";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const Caroussel = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
          try {
const requete  = await fetch("../jsons/portfolio.json", {
    method: "GET",
});
if (requete.ok) {
    const response = await requete.json();
    setProjects(response); 
    console.log(response);
}
          }
          catch (e) {
          console.log(e);
          }
        };
        fetchProjects();
    }, []);
    const [current, setCurrent] =useState(0);
    const { id } = useParams();

    const slidesLength = projects
    .filter((post) => post.id ===id)
    .map((post) => post.pictures.length);

    //fonction slide suivant 
  const goToNext =() => {
    const lastSlide = current === slidesLength -1;
    const newCurrent = lastSlide ? 0 : current +1;

    setCurrent(newCurrent);
  };
  setTimeout(() => {
    goToNext();
  }, 2000);

    return (
    projects
    .filter((project) => project.id === id)
    .map((project) =>(
        <Carousel className='carousel'
        showControls={false}
        key={project.id}
        infiniteloop
        thumbWidth={120}
        showIndicators={false}
        showStatus={false}
        type="slider"
      >
    
        <div className='img_carousel'>
            <img src={project.pictures[current]} alt={`photoicon${current}`}  /> 
      </div>    
        </Carousel>
    ))
    );
};

export default Caroussel;