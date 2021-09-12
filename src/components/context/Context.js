import { createContext, useContext, useReducer } from "react";
import faker from 'faker'
import { cartReducer, productReducer } from "./Reducers";


const Cart = createContext();
faker.seed(99);
const Context = ({children}) => {

const products = [ {
  id: faker.datatype.uuid(),
  name: "LeBron 16",
      price: faker.commerce.price(),
      image:
      "https://zupimages.net/up/21/36/hiiq.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Odyssey React Shield",
    
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike01a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Epic React Flyknit",
    
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike03a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Air Max 97 Premium",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Free RN Motion Flyknit",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike05a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Free RN Flyknit 2018",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike06a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Rise React Flyknit",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike07a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Flyknit Racer G",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike08a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike EXP-X14 Premium iD",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike09a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Free x Retcon",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike10a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Air Force 1 '07 Suede",
    
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike11a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Metcon 4 iD",
    
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike12a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },

  {
    id: faker.datatype.uuid(),
    name: "Nike Rise React Flyknit",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike07a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Flyknit Racer G",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike08a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike EXP-X14 Premium iD",
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike09a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {id: faker.datatype.uuid(),
  name: "LeBron 16",
      price: faker.commerce.price(),
      image:
      "https://zupimages.net/up/21/36/hiiq.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Odyssey React Shield",
    
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike01a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  {
    id: faker.datatype.uuid(),
    name: "Nike Epic React Flyknit",
    
      price: faker.commerce.price(),
      image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike03a.png",
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  },
  
]

const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });



  return (
        <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
            {children}
        </Cart.Provider>
    )
}



export const CartState = () => {
    return useContext(Cart);
  };

export default Context;

