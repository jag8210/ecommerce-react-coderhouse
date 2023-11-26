import CartWidget from "../cartWidget/CartWidget";
import logo from "../../assets/images/logo-shoes.png";
import { NavLink, Link } from "react-router-dom";



const NavBar = () => {
  return (
        <div className="container">
              <nav className="nav-container">
                <Link to='/'>
                    <img src={logo} alt="Logo ecommerce" className="logo" />
                </Link>
                    
                    <div className="menu-button">
                        <NavLink to={`/productos/`} className='option'>Todos</NavLink>
                        <NavLink to={`/productos/hombre`} className={({isActive})=> isActive ? 'active-option' : 'option'}>Hombre</NavLink>
                        <NavLink to={`/productos/mujer`} className={({isActive})=> isActive ? 'active-option' : 'option'}>Mujer</NavLink>
                        <NavLink to={`/productos/nino`} className={({isActive})=> isActive ? 'active-option' : 'option'}>Niño</NavLink>
                          
                    </div>
                    <CartWidget />
              </nav>
        </div>
  );
}

export default NavBar