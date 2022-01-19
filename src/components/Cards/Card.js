import React from "react";
import "./Card.css";

// eslint-disable-next-line react/prop-types
const Card = ({ heading, content, button, image }) => {
  return (
    <div className="card">
      <div className="imagecontainer">
        <img className="image" src={image} alt="top" />
      </div>
      <div className="container">
        <h3 className="head">{heading}</h3>
        <span className="content">{content}</span>
        <br />
        <span className="button_name" onClick={()=>{
          alert("you,ve clicked the button")
        }}>{button}</span>
      </div>
    </div>
  );
};
export default Card;
