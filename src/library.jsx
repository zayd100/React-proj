import React, { useState } from "react";
import Books from "./books";
import Intro from "./intro";
import Searchb from "./searchbarbooks";
import diplomacy from "./assets/diplomacy.png";
import war from "./assets/war.png";
import power from "./assets/power.png";
import order from "./assets/order.png";
import Popup from "./popup";

// Popup Component (Separate Component)
const Popups = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl relative">
                <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};

function Library(){
    const BookData = [
        {BookName: "Diplomacy", Year: 1999, ISBN: "ISBN-10: 067165991X; ISBN-13: 978-0671659912", Author:"Henry Kissinger", tp:912, image: diplomacy},
        {BookName: "World Order", Year: 2011, ISBN: "ISBN-10: 1594206147; ISBN-13: 978-1594206146.", Author:"Henry Kissinger",tp:432, image:order},
        {BookName: "The Art Of War", Year: 2003, ISBN: "ISBN-13: 978-1590302255.", Author:"Sun Tzu", tp:273, image: war},
        {BookName: "48 Laws of Power", Year: 2012, ISBN: "ISBN-10: 0140280197; ISBN-13: 978-0140280197."
        , Author:"Robert Greene", tp:452, image: power}
    ];

    // State for managing popup and book form
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortedBooks, setSorted] = useState(BookData);
    const [newBook, setNewBook] = useState({
        BookName: "", 
        Year: "", 
        ISBN: "", 
        Author: "", 
        tp: ""
    });
    const SortBookYear = () => {
        const yearly = [...sortedBooks].sort((a,b) => b.Year - a.Year);
        setSorted(yearly);
    }

    // Oldest book
    const OldBook = () => {
        const oldie = [...sortedBooks].sort((a,b) => a.Year - b.Year);
        setSorted(oldie);
    }

    // Max page
    const Maxpage = () => {
        const maxp = [...sortedBooks].sort((a,b) => b.tp - a.tp);
        setSorted(maxp);
    }

    // Min page
    const Minpage = () => {
        const minp = [...sortedBooks].sort((a,b) => a.tp - b.tp);
        setSorted(minp);
    }
    const deleteRecent = () => {
        // Remove the last added book (excluding original BookData)
        setSorted(prevBooks => {
            // Filter out any book that is not in the original BookData
            const addedBooks = prevBooks.filter(book => 
                !BookData.some(originalBook => originalBook.ISBN === book.ISBN)
            );
            
            // If there are added books, remove the last one
            if (addedBooks.length > 0) {
                return prevBooks.filter(book => 
                    book.ISBN !== addedBooks[addedBooks.length - 1].ISBN
                );
            }
            
            // If no added books, return original state
            return prevBooks;
        });
    }


    // Search and filter function

    // Open Popup
    const openAddBookPopup = () => {
        setIsPopupOpen(true);
    };

    // Close Popup
    const closeAddBookPopup = () => {
        setIsPopupOpen(false);
        // Reset form when closing
        setNewBook({BookName: "", Year: "", ISBN: "", Author: "", tp: ""});
    };

    // Handle new book form input
    const handleNewBookChange = (event) => {
        const { name, value } = event.target;
        setNewBook(prevBook => ({
            ...prevBook, 
            [name]: name === 'Year' || name === 'tp' ? parseInt(value) : value
        }));
    }
    
    // Add a new book
    const addBook = (e) => {
        e.preventDefault();
        if(newBook.BookName && newBook.Author && newBook.ISBN && newBook.Year && newBook.tp){
            const bookToAdd = {
                ...newBook
            };
            
            // Add the new book to the existing books
            setSorted(prevBooks => [...prevBooks, bookToAdd]);
            
            // Close popup and reset form
            closeAddBookPopup();
        }
    }
    const handleImageUpload = (e) => {
        const file = e.target.files[0]; 
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Convert to preview URL
            setNewBook(prev => ({ ...prev, image: imageUrl }));
        }
    };
    return(
        <div>
            <div className="search">
                <Intro/>   
                <Searchb 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="abd" onClick={openAddBookPopup}>Add Book</button>
            </div>
           
            {/* Popup Component */}
            <Popup isOpen={isPopupOpen} onClose={closeAddBookPopup}>
                <form onSubmit={addBook} className="add-book-form">
                    <input 
                        type="text" 
                        name="BookName" 
                        placeholder="Book Name" 
                        value={newBook.BookName} 
                        onChange={handleNewBookChange} 
                        required 
                    />
                    <input 
                        type="number" 
                        name="Year" 
                        placeholder="Year" 
                        value={newBook.Year} 
                        onChange={handleNewBookChange} 
                        required 
                    />
                    <input
                        type="number"
                        name="tp"
                        placeholder="Total Pages"
                        value={newBook.tp}
                        onChange={handleNewBookChange}
                        required
                    />
                    <input 
                        type="text" 
                        name="ISBN" 
                        placeholder="ISBN" 
                        value={newBook.ISBN} 
                        onChange={handleNewBookChange} 
                        required 
                    />
                    <input 
                        type="text" 
                        name="Author" 
                        placeholder="Author" 
                        value={newBook.Author} 
                        onChange={handleNewBookChange} 
                        required 
                    />
                      <input type="file" accept="image/*" onChange={handleImageUpload} required />
                    <button type="submit" className="abd">
                        Add Book
                    </button>
                    <button type="cancel" className="abd" onClick={closeAddBookPopup}>Cancel</button>

                </form>
            </Popup>
            <button className="abd" onClick={SortBookYear}>Sort by year</button>
                    <button className="abd" onClick={OldBook}>Sort Oldest</button>
                    <button className="abd" onClick={Maxpage}>Sort Max Pg</button>
                    <button className="abd" onClick={Minpage}>Sort Min Pg</button>
                    <button className="abd" onClick={deleteRecent}>Delete Recent</button>
            <div className="cards-container">
                {sortedBooks
                    .filter(books =>
                        books.Year.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
                        books.BookName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        books.ISBN.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
                        books.Author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        books.tp.toString().toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((book, index) => (
                        <Books key={index} {...book} />
                    ))
                }
            </div>
        </div>
    );
}

export default Library;