import React from "react";
import "../Cards/cards.css";
import "../Styling/images.css";

function Books({BookName,Year,ISBN, Author, tp, image}){
    return(
        <div className="card-new">
            <div className="image-container">
                <img src={image || "default-placeholder.png"} alt={BookName} className="imaj" />
        

            </div>
            <div className="card-content">
           
        <h1 className="card-head">{BookName}</h1>
        <h1 className="card-text card-subtitle">{Author}</h1>
        <h1 className="card-text">ISBN: {ISBN}</h1>
        <h1 className="card-text">Published Year: {Year}</h1>
        <h1 className="card-text">Total Pages: {tp}</h1>
            </div>
            </div>

        
    );
}
export default Books