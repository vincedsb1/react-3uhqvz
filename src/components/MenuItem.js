import React, { useState } from 'react';

function MenuItem(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={props.foodImage} alt={props.itemName} />
        </div>
        <div className="itemDescription">
          <h3>{props.itemName}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      <div className="rightContainer">
        <div>{props.price} EUR</div>
        <div
          id="favorite"
          onClick={() => setIsFavorite(!isFavorite)}
          className={isFavorite ? "favorite" : "not-favorite"}
        >
          {isFavorite ? "❤️" : "♡"}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;