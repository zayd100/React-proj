import PropTypes from 'prop-types'

const Card = ({bookname, headline, author, year, image, rating, sold, bestseller, isbn}) => {
    const isTopRated = rating === 5;
    const getStars = (num) => "⭐".repeat(num);
 

    return(
        <div className="cards" >
            <div className="image-container">
                {isTopRated && <div className="top-badge">     top👑</div>}
                <img src={image} alt="er" className="imag"></img>
            </div>
            <div className="card-content">
                <h1 className="card-head">{bookname}</h1>
                <p className='card-text'>{headline}</p>
                <p className="card-head">Author: {author}</p>
                <p className="card-text">Year Published: {year}</p>
                <p className="rating">Rating: {getStars(rating)}</p>
                <p className="body">Copies Sold: {sold}</p>
                <p className="like">Best Seller?: {bestseller ? "Yes" : "No"}</p>
                <p classname ="body">{isbn}</p>
     
                

        </div>
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