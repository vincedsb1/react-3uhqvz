import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  return (
    <div>
      {foodItems.map(item => (
        <MenuItem key={item.itemName} {...item} />
      ))}
    </div>
  );
}

export default MenuList;