import React from 'react' 
import cartIcon from "../../assets/images/carrito-de-compras.svg";

const CartWidget = () => {
  return (
    <div className='cart-container'>
        <img src={cartIcon} alt="cartWidget" className="cart-icon"/>
        <p className='cantidad-cart'>0</p>
    </div>
  )
}

export default CartWidget