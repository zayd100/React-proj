import PropTypes from 'prop-types'
import "./cards.css"
const Card = ({bookname, headline, author, year, image, rating, sold, bestseller, isbn}) => {
    const isTopRated = rating === 5;
    const getStars = (num) => "⭐".repeat(num);
 

    return(
        <div className="card-new">

        <article className="card" role="article" aria-labelledby="book-1-title">
      
          <div className="card-border-glow"></div>
          
      
          <div className="image-container">
            {isTopRated && 
              <div className="top-badge" aria-hidden="true">
                <span role="img" aria-label="Top Rated">👑</span> top
              </div>
            }
            <img 
              src={image} 
              alt={`Cover of ${bookname} by ${author}`} 
              className="imag"
              loading="lazy"
            />
          </div>
          
      
          <div className="card-content">
      
            <h1 id="book-1-title" className="card-title">{bookname}</h1>
            
          
            <p className="card-text card-subtitle">{headline}</p>
            
       
            <div className="card-meta-grid">
              <div className="meta-item">
                <span className="meta-label"></span>
                <p className="card-text meta-value">{author}</p>
              </div>
              
              <div className="meta-item">
                <p className="card-text meta-value">{year}</p>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Rating:</span>
                <p className="rating meta-value">
                  <span className="sr-only">{rating} stars</span>
                  {getStars(rating)}
                </p>
              </div>
              
              <div className="meta-item">
                
                <p className="body meta-value">Sold: {sold.toLocaleString()}+</p>
              </div>
              
              <div className="meta-item">
                <span className="meta-label">Bestseller:</span>
                <p className="like meta-value">
                  {bestseller ? (
                    <span className="bestseller-tag">Yes 🔥</span>
                  ) : (
                    "No"
                  )}
                </p>
              </div>
            </div>
            
      
            <p className="sr-only">ISBN: {isbn}</p>
            
         
            <footer className="card-footer">
           
            </footer>
          </div>
        </article>
        
      
       
      </div>
        
    );
};
Card.propTypes = {
    exname : PropTypes.string,
    timeshadsex: PropTypes.number,
    likeher: PropTypes.bool
}
Card.defaultProps = {
    exname : "Girl",
    kinks: "zeze_daddy",
    image:"",
    rating: "2.5 starts",
    timeshadsex: 2,
    likeher: true
}
export default Card