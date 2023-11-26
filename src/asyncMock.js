import hombre1 from './assets/images/hombre-1.jpg'
import hombre2 from './assets/images/hombre-2.jpg'
import hombre3 from './assets/images/hombre-3.jpg'
import hombre4 from './assets/images/hombre-4.jpg'
import mujer1 from './assets/images/mujer-1.jpg'
import mujer2 from './assets/images/mujer-2.jpg'
import mujer3 from './assets/images/mujer-3.jpg'
import mujer4 from './assets/images/mujer-4.jpg'
import nino1 from './assets/images/nino-1.jpg'
import nino2 from "./assets/images/nino-2.jpg"
import nino3 from "./assets/images/nino-3.jpg"
import nino4 from "./assets/images/nino-4.jpg"


const products = [
      {
            id: "1",
            title: "Zapatilla Nike Casual Hombre Air More Uptempo Café",
            price: 680,
            description:
                  "Nike Air Moire Uptempo 96 es una de las zapatillas de baloncesto más icónicas de la marca de Oregón. Fabricados en nobuk de alta calidad y la característica inscripción pop-art tridimensional “Air” en los laterales confieren a los zapatos un carácter vintage.",
            category: "hombre",
            image: hombre1,
            stock: 15,
      },
      {
            id: "2",
            title: "Zapatilla Nike Casual Hombre Air Max Sc Blanco",
            price: 340,
            description:
                  "Con sus líneas de diseño familiares, su look atlético de herencia y la amortiguación Air visible, el Nike Air Max SC es el broche de oro para cualquier atuendo.",
            category: "hombre",
            image: hombre2,
            stock: 15,
      },
      {
            id: "3",
            title: "Zapatilla Nike Baloncesto Hombre Giannis Immortality 2 Gris",
            price: 360,
            description:
                  "Giannis Immortality 2 son unas zapatillas de básquet para hombre inspiradas en la estrella de la NBA Giannis Antetokounmpo.",
            category: "hombre",
            image: hombre3,
            stock: 15,
      },
      {
            id: "4",
            title: "Zapatilla Nike Baloncesto Hombre Precision VI Negro",
            price: 340,
            description:
                  "Dalo todo por el todo en cada práctica y partido de básquetbol con los Tenis Nike Precision 6 para hombres. Estupendos también para tu porte casual regular.",
            category: "hombre",
            image: hombre4,
            stock: 15,
      },
      {
            id: "5",
            title: "Zapatilla Nike Baloncesto Hombre Precision VI Negro",
            price: 340,
            description:
                  "Dalo todo por el todo en cada práctica y partido de básquetbol con los Tenis Nike Precision 6 para hombres. Estupendos también para tu porte casual regular.",
            category: "mujer",
            image: mujer1,
            stock: 15,
      },
      {
            id: "6",
            title: "Zapatilla Nike Baloncesto Hombre Precision VI Negro",
            price: 340,
            description:
                  "Dalo todo por el todo en cada práctica y partido de básquetbol con los Tenis Nike Precision 6 para hombres. Estupendos también para tu porte casual regular.",
            category: "mujer",
            image: mujer2,
            stock: 15,
      },
      {
            id: "7",
            title: "Zapatilla Nike Baloncesto Hombre Precision VI Negro",
            price: 340,
            description:
                  "Dalo todo por el todo en cada práctica y partido de básquetbol con los Tenis Nike Precision 6 para hombres. Estupendos también para tu porte casual regular.",
            category: "mujer",
            image: mujer3,
            stock: 15,
      },
      {
            id: "8",
            title: "Zapatilla Nike Baloncesto Hombre Precision VI Negro",
            price: 340,
            description:
                  "Dalo todo por el todo en cada práctica y partido de básquetbol con los Tenis Nike Precision 6 para hombres. Estupendos también para tu porte casual regular.",
            category: "mujer",
            image: mujer4,
            stock: 15,
      },
      {
            id: "9",
            title: "Zapatilla Nike Casual Niño Tanjun GS Azul",
            price: 199,
            description:
                  "La comodidad y el estilo acompañarán a tu hijo al usar los tenis Nike Tanjun GS para niños. Un par ideal para el día a día, además de poder combinar con lo que quiera por ser un tenis gris que se contrasta con el logotipo swoosh.",
            category: "nino",
            image: nino1,
            stock: 15,
      },
      {
            id: "10",
            title: "Zapatilla Skechers Casual Infante Thermo Flash Negro",
            price: 199,
            description:
                  "Pasa el día con la ardiente diversión de las luces de Skechers S-Lights®: Thermo-Flash – Heat-Flux. Este diseño iluminado presenta una parte superior sintética y de malla con detalle de llamas, una correa de velcro en el empeine, frente de encaje plano y una luz con el tema “Flash”.",
            category: "nino",
            image: nino2,
            stock: 15,
      },
      {
            id: "11",
            title: "Zapatilla Skechers Casual Infante Wavetronic Azul",
            price: 150,
            description:
                  "La comodidad durante todo el día y el estilo deportivo fácil de usar se encuentran en Skechers Wavetronic – Ravlor. Este calzado ligero y sin cordones presenta una parte superior sintética y de malla con cordones elásticos y una plantilla acolchada.",
            category: "nino",
            image: nino3,
            stock: 15,
      },
      {
            id: "12",
            title: "Zapatilla Nike Casual Infante Court Legacy Blanco",
            price: 150,
            description:
                  "Para los pies más pequeños, recomendamos los Tenis Nike Court Legacy para niños que atribuyen al legado clásico de Nike y se han fabricado para darle un estilo casual a tu hijo en toda ocasión. Son muy versátiles y combinan cualquier look.",
            category: "nino",
            image: nino4,
            stock: 15,
      },
];




export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500);
    })
}



export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}



export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === productCategory))
        })
    })
}