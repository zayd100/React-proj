import React from "react";
import "../Cards/cards.css";
const Authors=({naam, price, year,rating})=>{
    const getStars = (num) => "⭐".repeat(num);
return(
    <div className="cards-container">

    <article className="card" role="article" aria-labelledby="author-1-title">
   
      <div className="card-border-glow"></div>
      
      <div className="card-content">
  
        <h1 id="author-1-title" className="card-title">{naam}</h1>
        
  
        <div className="card-details">
          <div className="card-meta">
            <span className="card-label">Hourly Rate:</span>
            <h2 className="card-head">${price}</h2>
          </div>
          
          <div className="card-meta">
            <span className="card-label">Registered Since:</span>
            <h2 className="card-head">{year}</h2>
          </div>
          
          <div className="card-meta">
            <span className="card-label">Rating:</span>
            <p className="card-text">{getStars(rating)}</p>
          </div>
        </div>
        
        
        <footer className="card-footer">

        </footer>
      </div>
    </article>
    
  
   
  </div>
    );



};

export default Authors