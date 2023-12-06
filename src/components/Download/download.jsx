import react from 'react';
import { useTranslation } from "react-i18next";
import  cv from "./CV BEKKAR NESRINE YAHOUM.pdf";

const DownloadBtn = () => {
  const { t } = useTranslation();
  return (
    <button className="glow-on-hover" type="button">
      <a
        className="btn_text"
        href={cv}
        target="_blank"
        rel="noreferrer"
        aria-label={t("Download")}
      >
        {t("Download")}
      </a>
    </button>
  );
};

export default DownloadBtn;