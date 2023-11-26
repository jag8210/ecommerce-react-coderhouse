import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import Greeting from "./components/Greeting/Greeting";




function App() {
  
  return (

    <div className="app">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element= {<Greeting greeting={"BIENVENIDOS"} underGreeting={"A nuestro ecommerce con react"}/>} />
                <Route path="/productos" element={<ItemListContainer />}/>
                <Route path="productos/:categoria" element={<ItemListContainer />}/>
                <Route path="item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App
