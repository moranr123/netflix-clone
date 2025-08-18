import React, {useEffect, useRef} from "react";
import "./TitleCards.css"; // Assuming you have a CSS file for TitleCards component
import cards_data from "../../assets/cards/Cards_data";// Adjust the path as necessary


const TitleCards = ({title, category}) => {
    const cardsRef = useRef();

    const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
      // This will scroll the cards horizontally based on the vertical scroll wheel movement
    }
    useEffect(() => {
      cardsRef.current.addEventListener("wheel", handleWheel);
    }, [])


  return (
    <div className="title-cards">
      <h2>{title?title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
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