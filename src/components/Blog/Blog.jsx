
import React from 'react';
import {useTypewriter, Cursor } from "react-simple-typewriter"; 
import { useTranslation } from 'react-i18next';


const TypingAnimation = () =>{
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");
  const [text] = useTypewriter({
    words: [
      t('creativite'),
      t('inspiration'), 
      t('passion')
    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80
  })

  return (
    <div style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }} 
     className='Loisir'>
    <p>  {t("myTextBlog")}  {' '}
      <span className='Loisir__text'>{text}</span>
      <Cursor  style={{ direction: lang === "ar" ? "rtl": "ltr" }}  cursorColor='red' />
</p>
</div>
  );
};
  export default TypingAnimation;