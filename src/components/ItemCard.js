import React, { useState } from 'react';
import './ItemCard.css';

function ItemCard({ item}) {
  const [hovered, setHovered] = useState(false);

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
      <button className="add-to-cart" >
          View Phone Info
        </button>
    </div>
  );
}

export default ItemCard;
