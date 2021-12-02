import React, {useContext} from 'react';
//conetxt
import StoreContext from "../../Context/StoreContext";
//componentss
import AlbumCard from "../../Components/Home/AlbumCard";
//css

import "./Home.styles.css"

const Home = () => {
    const {state, dispatch} = useContext(StoreContext);
    const {cart} = state;

    //funciones
    const handleAddProduct = (item) => {
        let newCart;
        let isNewProduct = cart?.indexOf(
          cart.find(product => product.id === item.id));
        if(isNewProduct !== -1){
          newCart = cart.map(product=>
            product.id === item.id ? {...product, qty: product.qty + 1} : product
            );
        } else {
          newCart = [...cart, item];
        }
        console.log(newCart);
        dispatch({type: "ADD_TO_CART", payload: {...item, cart: newCart}})
    }

    return (
        <>
        <div className="main-title" >
        <img className="d-inline-block" src="https://cdn-icons-png.flaticon.com/512/3419/3419600.png" alt="Girl in a jacket" width="50" height="50"/> 
        <h1 className="d-inline-block">HIP HOP MUSIC STORE</h1>
        </div>
        <h5>The best rap/trap CDs. Shipping all over the world </h5>
        <div className="product-container">
           {state?.list?.map(item => (
             <AlbumCard 
             key={item.id}
             data={item}
             handleAddProduct={handleAddProduct}         
             />
 
))}

        </div>
        
        </>
    );
};

export default Home;