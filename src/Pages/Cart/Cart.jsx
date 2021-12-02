import React, {useContext} from 'react';
import StoreContext from "../../Context/StoreContext";

//css
import "./Cart.styles.css"
//compoenents
import ProductCard from "../../Components/Cart/ProductCard.jsx"


const Cart = () => {
    //contexto    
    const {state, dispatch} = useContext(StoreContext);
    const {cart} = state;

        //funciones
        const handleDeleteProduct = (item) => {
        const isGreaterTahn = item.qty > 1;
        let newCart = [];
        
        if(isGreaterTahn){
         newCart = cart.map(product => product.id === item.id ? {...product, qty: product.qty - 1} : product)
        } else {
        newCart = cart?.filter(product => product.id !== item.id)
        }
        dispatch({type: "REMOVE_FROM_CART", payload: {...item, cart: newCart}})

        }

    return(
        <div className="">
        <div className="main-title" >
        <img className="d-inline-block" src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="Girl in a jacket" width="50" height="50"/> 
        <h1 className="d-inline-block">MY CART</h1>
        </div>
        <div className=" sm:w-3/5 w-2/3 m-auto">
            {cart?.map(product=>
            <ProductCard 
            data={product}
            handleDeleteProduct={handleDeleteProduct}/>
                )}
         


        </div>
        </div>

       
    
    )
}

export default Cart;