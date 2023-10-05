import React from "react";
import imagePortfolio from "../../assets/images/logo/imgDev.jpg";

const Info = () => {
  return (
    <div className="infoPerso__Contanier">
      <div className="infoPerso">
        <p>
          NESRINE YAHOUM <br />
          D é v e l o p p e u s e W e b F r o n t e n d <br />
          <br />
          Développeuse Web créative et innovante, capable de créer des sites web
          pour des clients, dotée d'excellentes compétences en matière
          d'organi-sation, de planification et de vérification de code. Volonté
          d'apporter mon expertise dans la réalisation de projets de conception
          de sites Internet
        </p>
      </div>

      <div className="monImage">
        <img src="imagePortfolio" alt="image de portfolio Nes" />
      </div>
    </div>
  );
};

export default Info;
