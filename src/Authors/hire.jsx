
import React from "react";
import { useState } from "react";
import Searchauth from "../SearchBars/searchauth";
import Authors from "./authors";
import Write from "../Content/write";
import Popup from "../Popups/popup";
import "../Cards/cards.css";
function Test(){
    const phal = [
        {naam: "Zach Maxwell", price: 43, year: 2019,rating:1},
        {naam: "Steve Rogers", price: 38, year: 2022,rating:3},
        {naam:"Max Payne", price: 35, year: 2020,rating:2},
        {naam:"Patrick Bateman", price: 55, year: 2021,rating:4},
        {naam:"Tony Stark",price:200,year:2025,rating:5}
    ];
       const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [searchQuery, setSearchQuery]= useState("");
    const [sortedAuthors,setsorted]=useState(phal);
    const [newauth, setNewauth]= useState({
        naam:"",
        price:"",
        year:"",
        id:""
    });
    
    const sortprice = () =>{
        const done = [...sortedAuthors].sort((a,b)=>a.price-b.price);
        setsorted(done)
    }
    const expensive = ()=> {
        const exp = [...sortedAuthors].sort((a,b)=> b.price - a.price);
        setsorted(exp)
    }
    const yearsort = () =>{
        const year = [...sortedAuthors].sort((a,b)=> b.year-a.year);
        setsorted(year)
    }
    const oldest = ()=>{
        const loyal = [...phal].sort((a,b)=>a.year-b.year);
        setsorted(loyal);
    }
    const filterf = sortedAuthors.filter(author =>
        author.naam.toLowerCase().includes(searchQuery.toLowerCase())||
        author.price.toString().toLowerCase().includes(searchQuery.toLowerCase())
     );
     const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        };
        const openpop=()=>{
            setIsPopupOpen(true);
        }
        const closepop = ()=>{
            setIsPopupOpen(false);
            setNewauth({naam:"",price:"",year:""});
        }
        const handleNewauthchange = (event) => {
            const { name, value } = event.target;
            setNewauth(prevauth => ({
                ...prevauth, 
                [name]: name === 'year' || name === 'id' ? parseInt(value) : value
            }));
        }
        const sortrate = ()=>{
            const good = [...phal].sort((a,b)=>b.rating-a.rating);
            setsorted(good);
        }
        const sortminrate= ()=>{
            const low = [...phal].sort((a,b)=>a.rating-b.rating);
            setsorted(low);
        }
        const getStars = (rating) => "⭐".repeat(rating);

        
    return(
        //wrapped these buttons around the button container, to maintain the horizontal property.
        <div className="f-content">
        <Write/>
               <div className="search">
                <Searchauth value={searchQuery} onChange={handleSearchChange} />
    <div className="button-container">              
        <button onClick={sortprice} className="fixed-button">Most Economical</button>
        <button onClick={expensive} className="fixed-button">Top of the Line</button>
        <button onClick={yearsort} className="fixed-button">Recently Partnered</button>
        <button onClick={oldest} className="fixed-button">Most Loyal</button>
        <button onClick={sortrate} className="fixed-button">Most Rated</button>
        <button onClick={sortminrate} className="fixed-button">Least Rated</button>
        <button onClick={openpop} className="fixed-button">Partner With Us</button>
            </div>
        <div>
        <Popup isOpen={isPopupOpen} onClose={closepop}>
             
                    <p>Email us, with your resume at hiring@writemybook.com</p>
        
             
                    <button onClick={closepop} className="abd">
                        Email us
                    </button>
                    <button onClick={closepop} className="abd">Close</button>

                
            </Popup>
            </div>
        <div className="cards-container">
        {filterf.length >0 ? (
        filterf.map((phal,index)=> (
<Authors key={index} naam={phal.naam} price={phal.price} year = {phal.year} rating = {phal.rating} />
        ))
    ) : (
        <p>'{searchQuery}' not found!</p>
    )}
        </div>
    
        </div>
        
        
        </div>
        
    );
}
export default Test