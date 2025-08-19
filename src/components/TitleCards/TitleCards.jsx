import React, {useEffect, useRef, useState} from "react";
import "./TitleCards.css"; // Assuming you have a CSS file for TitleCards component
import cards_data from "../../assets/cards/Cards_data";// Adjust the path as necessary
import { Link } from "react-router-dom"; // Importing Link for navigation

const TitleCards = ({title, category}) => {

    const [apiData,setApiDate] = useState([]);

    const cardsRef = useRef();

    const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTNmNDc1ZWY1MGIzMTAzZTAyYjVmMzQxMThjNjE3YiIsIm5iZiI6MTc1NTU5MzM0NC4xMDksInN1YiI6IjY4YTQzYTgwMjliZmQ1ZTJhMjU2N2RlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vAoCKyslfkKqmW-idjoqwK8iazcpDZ1a4y3TQ8a_1HY'
  }
};



    const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
      // This will scroll the cards horizontally based on the vertical scroll wheel movement
    }
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiDate(res.results))
        .catch(err => console.error(err));

      cardsRef.current.addEventListener("wheel", handleWheel);
    }, [])


  return (
    <div className="title-cards">
      <h2>{title?title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) =>{
          return(
            <Link to={`/player/${card.id}`}className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
        
    </div>
  );
}
export default TitleCards;