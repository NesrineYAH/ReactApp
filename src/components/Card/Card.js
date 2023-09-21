import React from "react";

function Card({ title }) {
  return (
    <article className="card">
      {/* <img src={image} alt={title} className="card__img" /> */}
      <div className="card_overlay"></div>
      <h2 className="card__title">{title}</h2>
      <p>Loradipisicing elit. Imorrupti explicabo ducimus ratione?</p>
    </article>
  );
}

export default Card;
