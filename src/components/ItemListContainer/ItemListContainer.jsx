import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import { getProducts } from '../../asyncMock.js';
import { getProductsByCategory } from '../../asyncMock.js';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const {categoria} = useParams();
    console.log(categoria)

    useEffect(()=> {

        const asyncFunc = categoria ? getProductsByCategory : getProducts

        asyncFunc(categoria)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[categoria])


      return (
            <>
                  
                  <div className='item-list-container'>
                    <ItemList products = {products}/>
                  </div>
            </>
      );
};

export default ItemListContainer