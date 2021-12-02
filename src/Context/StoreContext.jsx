import React, {createContext, useReducer} from 'react';
//crear contexto
const StoreContext = createContext();
//reducer
const initialState= {
    list : [
    {
        id: 1,
        album: "HECHO A MANO",
        artist: "YSY A",
        price: 170,
        cover: "https://e.snmc.io/i/600/w/7aefaa2c64c018a6d929c95c7bfedf72/7818869/ysy-a-hecho-a-mano-Cover-Art.jpg",
        qty: 1
    },
    {
        id: 2,
        album: "ANTEZANA 247",
        artist: "YSY A",
        price: 170,
        cover: "https://e.snmc.io/i/600/s/d88d7338c26875a7dc2a28812c010bc9/7412606/ysy-a-antezana-247-Cover-Art.jpg",
        qty: 1
    },
    {
        id: 3,
        album: "TRAP DE VERDAD",
        artist: "YSY A",
        price: 200,
        cover: "https://images.genius.com/b1a2f69ea7ec6a0acf0adc62e4e01e97.1000x1000x1.png",
        qty: 1
    },
    {
        id: 4,
        album: "EL ORIGEN",
        artist: "ACRU",
        price: 200,
        cover: "https://images.genius.com/2b25d0d1648aaeb407cabef7ce6648c1.1000x1000x1.jpg",
        qty: 1
    },
    {
        id: 5,
        album: "#ANONIMATO",
        artist: "ACRU",
        price: 200,
        cover: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fc06352f31ed60ae1b3d38f177be9af6c.640x640x1.jpg",
        qty: 1
    },
    {
        id: 6,
        album: "SUPER SANGRE JOVEN",
        artist: "DUKI",
        price: 150,
        cover: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F16dbc54da2df3d28318d2e4b0ac9bf9c.1000x1000x1.jpg",
        qty: 1
    },
    {
        id: 7,
        album: "DESDE EL FIN DEL MUNDO",
        artist: "DUKI",
        price: 250,
        cover: "https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F4ab07de8032ab00b91b04061a687ad00.1000x1000x1.png",
        qty: 1
    },
    {
        id: 8,
        album: "ISTMO",
        artist: "DANO",
        price: 270,
        cover: "https://e.snmc.io/i/600/w/5670ebcdbcd17611c7c883e05990df5a/7573038/dano-istmo-Cover-Art.jpg",
        qty: 1
    },
    {
        id: 9,
        album: "WRITTING CLASSICS",
        artist: "T&K",
        price: 270,
        cover: "https://mp3.hhgroups.com/albumes/TK-Writing-classic-46848_front.jpg",
        qty: 1
    },  
],
cart: [],
total: 0
};

const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
 console.log(action.payload)

        return {
      
          ...state,
          cart: [...action.payload.cart],
          total: state.total + action.payload.price
        };
  
      case "REMOVE_FROM_CART":
        
        return {
          ...state,
          cart: [...action.payload.cart],
          total: state.total - action.payload.price          
        };
  
      default:
        return state;
    }
  };
  
  //Provider
  const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    //Funciones
  
    const data = {
      state,
      dispatch
    };
  
    return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
  };
  
  export default StoreContext;
  export { StoreProvider };