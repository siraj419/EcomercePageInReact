import { FaStar } from "react-icons/fa";
import { BsBucketFill } from "react-icons/bs";
import './card.css'

function Card({product}) {
  return (
    <section className='card'>
        <div className="img-container">
            <img src={product.img} alt={product.title} />
        </div>
        <h3>
            {product.title}
        </h3>

        <div className='rating'>
            <div className='stars'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <span className="reviews">
                {product.reviews}
            </span>
        </div>

        <div className="card-footer">
            <div className="price">
                <span className="prevPrice">{product.prevPrice}</span>
                <span className="newPrice">{product.newPrice}</span>
            </div>
            <BsBucketFill className="bucket-icon"/>
        </div>
    </section>
  )
}

export default Card