import { Link } from "react-router-dom";
import './item.css'

const Item = ({id, title, image, price, stock, category}) => {


  return (
        <article className="card-product">
            
              <picture>
                    <img src={image} alt={title} />
              </picture>

              <section>
                    <h2 className="item-header"> {title}</h2>
                    <p className="info-price"> ${price} </p>
                    <p className="info-category"> {category} </p>
              </section>

              <footer className="item-footer">
                    <Link to={`/item/${id}`} className="product-button">Ver Detalle</Link>
              </footer>
        </article>
  );
}

export default Item