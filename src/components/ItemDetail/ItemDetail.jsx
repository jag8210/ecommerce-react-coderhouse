import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css'


const ItemDetail = ({id, title, image, category, description, price, stock}) => {

   console.log(title)
  return (
        <div className="card-item">
              <picture className='container-img'>
                    <img src={image} alt={title} />
              </picture>
              <section className="item-info-container">
                    <div className="item-info">
                          <h2>{title}</h2>
                          <p className="info-categoria"> Categoria: {category} </p>
                          <p className="description"> {description} </p>
                          <p className="info-precio"> ${price} </p>
                    </div>

                    <div className="item-footer">
                          <ItemCount
                                initial={1}
                                stock={10}
                                onAdd={(quantity) =>
                                      console.log("Cantidad Agregada", quantity)
                                }
                          />
                    </div>
              </section>
        </div>
  );
}

export default ItemDetail