import CartWidget from "../cartWidget/CartWidget";
import logo from "../../assets/images/logo-shoes.png"



const NavBar = () => {
  return (
        <div className="container">
              <nav className="nav-container">
                    <img src={logo} alt="Logo ecommerce" className="logo" />
                    <div className="menu-button">
                          <button>Hombre</button>
                          <button>Mujer</button>
                          <button>Niños</button>
                    </div>
                    <CartWidget />
              </nav>
        </div>
  );
}

export default NavBar