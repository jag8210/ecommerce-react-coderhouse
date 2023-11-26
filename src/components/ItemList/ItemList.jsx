import Item from '../Item/item.jsx'
import './itemList.css'

const ItemList = ({products}) => {
  return (
    <div className="list-group">

        {products.map(product => <Item key= {product.id} {...product}/>)}

    </div>
  )
}

export default ItemList