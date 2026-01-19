import react from 'react';
import { useTranslation } from "react-i18next";
import CV from "./CV_ BEKKAR_NESRINE_YAHOUM_Développeuse Full Stack .pdf";


const DownloadBtn = () => {
  const { t } = useTranslation();
  return (
    <button className="glow-on-hover" type="button">
      <a
        className="btn_text"
        href={CV}
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