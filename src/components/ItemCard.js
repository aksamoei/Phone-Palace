import React, { useState } from 'react';
import './ItemCard.css';
import { Link, useNavigate } from 'react-router-dom';

function ItemCard({ item, onCart}) {
  const [hovered, setHovered] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/phones/${item.id}`);
  };

  return (
    <div
      className="item-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={item.image} alt={item.phoneName} className="item-image" />
      <h3 className="item-name">{item.phoneName}</h3>
      <p className="item-price">Price: ${item.price}</p>
      {/*hovered && (
        <button className="add-to-cart" onClick={() => console.log(`Clicked on ${item.phoneName}`)}>
          Add to Cart
        </button>
      )*/}
<<<<<<< HEAD
      <button className="add-to-cart" onClick={()=>onCart(item.id)}>
=======
      
      <button className="add-to-cart" onClick={handleClick} >
>>>>>>> origin/main
          View Phone Info
        </button>
    </div>
  );
}

export default ItemCard;
