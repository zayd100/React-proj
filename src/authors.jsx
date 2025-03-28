import React from "react";
const Authors=({naam, price, year,id})=>{
return(
    <div className="card">
        <h1>{naam}</h1>
        
        <div className="card-content">
       
        <h2 className="card-head">${price} Hourly</h2>
        <h2 className="card-head">Registered Since: {year}</h2>
        <h2 className="card-text">{id}</h2>
        </div>
        </div>
    );



};

export default Authors