import React from 'react';

const Boutton = (props) => {
    return (
      <button className="glow-on ProjectBtn">
        <a
          href={props.destination}
          className="btn_text"
          target="_blank"
          rel="noreferrer"
        >
          {props.title}
        </a>
      </button>
    );
  };
  export default Boutton;