import React from 'react';
//css
import "./AlbumCard.styles.css"
//bootstrap
import {Card} from 'react-bootstrap';

const AlbumCard = ({ data, handleAddProduct}) => {
    return (
      <div className="cover custom-card w-1/2 sm:w-1/5" >
      <Card.Img className="bg-transparent" variant="top" src={data.cover} />
        <h4 className="mt-2">{data.album}</h4>
        <h5>{data.artist}</h5>
          <h6>${data.price}</h6>
          <button  onClick={() =>handleAddProduct(data)}>
          <img className="d-inline-block mb" src="https://cdn-icons-png.flaticon.com/512/2438/2438136.png" width="30" height="30" alt={data.album}/> 
          </button>
    
    </div>
    
    
    );
};

export default AlbumCard;