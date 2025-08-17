import React from "react";
import "./TitleCards.css"; // Assuming you have a CSS file for TitleCards component
import cards_data from "../../assets/cards/Cards_data";// Adjust the path as necessary


const TitleCards = () => {
  return (
    <div className="title-cards">
      <h2>Popular on Netflix</h2>
      <div className="card-list">
        {cards_data.map((card, index) =>{
          return(
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default TitleCards;