import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, decrementQuantity } from "../../redux/cartslice";
import starImage from '../../assets/star.jpeg';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const {
    url,
    addToCart: addToCartContext,
    removeFromCart,
    cartItems
  } = useContext(StoreContext);

  const dispatch = useDispatch();
  const itemCount = cartItems[id] || 0;

  const handleIncrement = () => {
    dispatch(addToCart({ id, name, price, image }));
    addToCartContext(id);
  };

  const handleDecrement = () => {
    if (itemCount > 0) {
      dispatch(decrementQuantity(id));
      removeFromCart(id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition relative w-[300px]">
      <div className="relative">
        <img src={url + "/images/" + image} alt={name} className="w-full h-48 object-cover" />
        
        {/* Quantity + / - button with count display */}
        <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded flex items-center space-x-2 shadow">
          <button onClick={handleDecrement} className="text-red-600 font-bold text-lg px-2">-</button>
          <span className="font-semibold text-gray-800">{itemCount}</span>
          <button onClick={handleIncrement} className="text-green-600 font-bold text-lg px-2">+</button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-blue-600 font-medium">₹{price}</p>
          <img src={starImage} alt="rating" className="w-20 h-7 object-contain" />
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FoodItem;
