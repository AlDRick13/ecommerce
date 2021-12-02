import React from 'react';

//bootstrap
import {Button} from 'react-bootstrap'
//css
import "./ProductCard.styles.css"

const ProductCard = ({data, handleDeleteProduct}) => {
    return (
        <div className="d-inline-block sm:w-1/3 m-1 custom-card">
           <div className="flex">
<div  className="items-center justify-center d-inline-block  sm:w-1/2 p-2 ">
            <img src={data.cover} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2">
        <p className="sm:text-xl text-rap text-center p-1 text-white">{data.album}</p>
        <p className="  text-rap text-center p-1 text-white">QUANTITY: {data.qty}</p>
        </div>
           </div>
        
        {/* <p className="d-inline-block w-2/3  p-2 text-white"></p> */}
        <div className="d-flex  justify-center">
        <Button variant="danger"
        onClick={() => handleDeleteProduct(data)}
        >Remove from cart
        </Button>
        </div>
    </div> 
    );
};

export default ProductCard;