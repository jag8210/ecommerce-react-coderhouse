import React from 'react'
import '../../index.css'
import bannerImg from '../../assets/images/img-banner.png'
import { Link } from 'react-router-dom';

const Greeting = ({greeting, underGreeting}) => {
  return (
        <>
              <div className="container-banner">
                    <div className="text-container">
                          <h1 className="titulo-h1">{greeting}</h1>
                          <h2 className="titulo-h2">{underGreeting}</h2>
                          <Link to ='/productos' className="button-banner">
                                VER PRODUCTOS
                          </Link>
                    </div>
                    <div className="banner-img-container">
                          <img src={bannerImg} alt="Imagen Banner" />
                    </div>
              </div>
        </>
  );
}

export default Greeting