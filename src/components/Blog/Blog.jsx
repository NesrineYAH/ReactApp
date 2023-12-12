import { useState, useEffect } from 'react';
import React from 'react';
import {Typewriter } from "typewriter-effect";
import {useTypewriter, Cursor } from "react-simple-typewriter";

/*
const TypingAnimation = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prevText) => {
        const nextChar = text[currentIndex];
      setCurrentIndex((prevIndex) => prevIndex + 1);
        return prevText + nextChar;
      });

      if (currentIndex  === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, speed, currentIndex]);

  return (

  <span className='TextLoisir'>j'adore {"le dévelopement, la programation , création des site web,"}</span>

  );
};

export default TypingAnimation;
*/

const TypingAnimation = () =>{
  const [text] = useTypewriter({
    words: ['le développement', 'la Programmation', 'le web', ' la technologie!'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80
  })

  return (
    <div className='Loisir'>
 <p> J'adore {' '}
      <span className='Loisir__text'>{text}</span>
      <Cursor cursorColor='red' />
</p>
</div>
  );
};
  export default TypingAnimation;