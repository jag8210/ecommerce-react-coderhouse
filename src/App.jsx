import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"




function App() {
  
  return (
        <>
              <NavBar />
              <ItemListContainer
                    greeting={"BIENVENIDOS"}
                    underGreeting={"A nuestro ecommerce con react"}
              />
        </>
  );
}

export default App
