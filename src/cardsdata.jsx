import Card from "./card";
import Content from "./content";
import { useState } from "react";
import SearchBar from "./searchbar";
import diplomacy from "./assets/diplomacy.png";
import war from "./assets/war.png";
import power from "./assets/power.png";
import order from "./assets/order.png";

function Cd() {
  const cardsData = [
    {
      bookname: "Diplomacy",
      headline : "A Masterclass on Global Politics by Henry Kissinger",
      author: "Henry Kissinger",
      year: 1994,
      image: diplomacy,
      rating: 5, 
      sold: 3500000,
      bestseller: true,
      isbn:  "ISBN-10: 067165991X; ISBN-13: 978-0671659912"
      
    },
   
      {
        bookname: "The Art Of War",
        headline : "Timeless Strategies for Victory and Leadership",
        author: "Sun Tzu",
        year: 5,
        displayYear: "5 Century BC", //to add century. 
        image: war,
        rating: 4, 
        sold: 10000000,
        bestseller: true,
        isbn: "ISBN-13: 978-1590302255."
     
      },
     
        {
          bookname: "The 48 Laws of Power",
          headline : "A Ruthless Guide to Influence and Domination",
          author: "Robert Greene",
          year: 1998,
          image: power,
          rating: 4, 
          sold: 1200000,
          bestseller: true,
          isbn: "ISBN-10: 0140280197; ISBN-13: 978-0140280197."
        
        },
          {
            bookname: "New World Order",
            headline : "Kissinger’s Vision for Global Stability and Power",
            author: "Henry Kissinger",
            year: 2014,
            image: order,
            rating: 2, 
            sold: 500000,
            bestseller: false,
            isbn: "ISBN-10: 1594206147; ISBN-13: 978-1594206146."
       
          }
   
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [sortedCards, setSortedCards] = useState(cardsData); 
  

  // Sorting function
  const sortByRating = () => {
    const sorted = [...sortedCards].sort((a, b) => b.rating - a.rating);
    setSortedCards(sorted);
  };
  

    //sort by year
    const sortByAge = () =>{
      const sorta = [...sortedCards].sort((a, b)=>b.year - a.year);
      setSortedCards(sorta)
    }
    //sort via min 
    const sortage= ()=>{
      const agey = [...sortedCards].sort((a,b)=>a.year-b.year);
      setSortedCards(agey);
    }

   //min rating sort
const sortmin = () => {
  const sortm = [...sortedCards].sort((a,b)=>a.rating-b.rating);
  setSortedCards(sortm);
}


  //sold
const mostsold = () => {
  const mostf = [...sortedCards].sort((a,b)=> b.sold - a.sold);
  setSortedCards(mostf);
}
// sold
const leastsold = () => {
const breaks = [...sortedCards].sort((a,b)=> a.sold - b.sold );
setSortedCards(breaks);


}




  // Filter cards
  const filteredCards = sortedCards.filter(card =>
    card.bookname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.author.toLowerCase().includes(searchQuery.toLowerCase()) || 
    card.origin.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  // Handle search 
  const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
  };
  
  // Convert rating number to stars
  const getStars = (rating) => "⭐".repeat(rating);

  return (
    <div className="app-container">
      <Content />

      <div className="search">
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <button className="abdc" onClick=  {sortByRating}>Sort by Rating</button>
        <button className="abdc" onClick ={sortmin}>Sort by low Rating</button>
        <button className="abdc" onClick={sortByAge}>Sort by Recent </button>
        <button className="abdc" onClick={sortage}>Sort by Oldest </button>
        <button className="abdc" onClick={mostsold}>Sort By most sold</button>
        <button className="abdc" onClick={leastsold}>Sort by least sold</button>
      
         

         
        <div className="cards-container">
          {filteredCards.length > 0 ? ( 
          filteredCards.map((card, index) => (
            <Card key={index} {...card} year={card.displayYear || card.year} />
          ))
        ) : (

            <p>'{searchQuery}' not found</p>
        )}
        </div>
      </div>
    </div>
  );
}

export default Cd;
