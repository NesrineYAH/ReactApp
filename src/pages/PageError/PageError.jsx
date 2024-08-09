import React from "react";
//import Error from "../../components/Error/Error";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="NoPage">
        <header />
      
        <div className="errorContainer">
      <p className="errorContainer__Number">404</p>
      <p className="errorContainer__Text">{t('txtError')}</p>
      <Link to="/" className="errorContainer__LinkHome">{t('txtErrorI')}</Link>
    </div>
        
      </div>
    </>
  );
};

export default ErrorPage;
