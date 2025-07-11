import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
  const { food_items, category } = useContext(StoreContext);

  const filteredItems =
    category === "All"
      ? food_items
      : food_items.filter((item) => item.category === category);

  return (
    <div className="px-6 py-8">
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredItems.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
