import React, { useEffect, useState } from "react";
import "./Player.css"; // Assuming you have a CSS file for Player component
import back_arrow_icon from "../../assets/back_arrow_icon.png"; // Assuming you have a back arrow icon image
import { useParams,useNavigate } from "react-router-dom"; // Importing useParams to get the movie ID from the URL

const Player = () => {

  const navigate = useNavigate(); // Importing useNavigate for navigation

  const {id} = useParams(); // Assuming you are using react-router-dom to get the movie ID from the URL

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])





  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={() => {navigate(-2)}} />
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`} 
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;