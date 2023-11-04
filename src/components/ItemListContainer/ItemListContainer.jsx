import React from 'react'
import bannerImg from "../../assets/images/img-banner.png"

const ItemListContainer = ({ greeting, underGreeting }) => {
      return (
            
                  <div className="container-banner">
                        <div className="text-container">
                              <h1 className="titulo-h1">{greeting}</h1>
                              <h2 className="titulo-h2">{underGreeting}</h2>
                              <button className='button-banner'>VER PRODUCTOS</button>
                        </div>
                        <div className="banner-img-container">
                              <img src={bannerImg} alt="Imagen Banner" />
                        </div>
                  </div>
            
      );
};

export default ItemListContainer