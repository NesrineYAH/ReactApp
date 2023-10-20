import React from "react";
import { useTranslation } from "react-i18next";
import MySkills from "../../components/MySkills/MySkills";

const Skills = () => {
    const { t } = useTranslation();
    return (
        <div className="skills" id={t("skills_id")} >
            <h1 className="title">{t("skills_title")}</h1>
        <MySkills />
          
        </div>
    );
};

export default Skills;