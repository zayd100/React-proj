
import React from "react";
import { useState } from "react";
import SearchBar from "./searchbar";
import Authors from "./authors";
import Write from "./write";
import Popup from "./popup";
function Test(){
    const phal = [
        {naam:"Max Payne", price: 35, year: 2020,id:213},
        {naam: "Zach Maxwell", price: 43, year: 2019,id:4124},
        {naam:"Patrick Bateman", price: 55, year: 2021,id:213124},
        {naam:"Tony Stark",price:200,year:2025,id:213512}
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

        
    return(
        <div className="f-content">
        <Write/>
               <div className="search">
                <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <button onClick={sortprice} className="fixed-button">sort by cheapest</button>
        <button onClick={expensive} className="fixed-button">Sort by Most Expensive</button>
        <button onClick={yearsort} className="fixed-button">Sort by recent arrivals</button>
       
        <button className="fixed-button" onClick={openpop}>Get Paid, Write for us</button>
        <div>
        <Popup isOpen={isPopupOpen} onClose={closepop}>
             
                    <p>Email us, with your resume at hiring@writemybook.com</p>
        
             
                    <button onClick={closepop} className="abd">
                        Email us
                    </button>

                
            </Popup>
            </div>
        <div className="cards-container">
        {filterf.length >0 ? (
        filterf.map((phal,index)=> (
<Authors key={index} naam={phal.naam} price={phal.price} year = {phal.year} />
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