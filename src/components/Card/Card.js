import React from "react";

function Card({ title }) {
  return (
    <article className="card">
      {/* <img src={image} alt={title} className="card__img" /> */}
      <div className="card_overlay"></div>
      <h2 className="card__title">{title}</h2>
    </article>
  );
}

export default Card;
