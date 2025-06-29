import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartItems,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  getCartSubtotal,
  getCartDeliveryCharge,
  getCartTotalAmount,
} from "../../redux/cartslice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(getCartSubtotal);
  const deliveryCharge = useSelector(getCartDeliveryCharge);
  const totalAmount = useSelector(getCartTotalAmount);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg md:text-xl">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start justify-between bg-white rounded-xl shadow p-4 gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 w-full">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-1 text-base md:text-lg">₹{item.price}</p>
                <div className="flex items-center mt-3 gap-2">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="text-base md:text-lg">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-3 text-sm text-red-500 underline"
                >
                  Remove
                </button>
              </div>
              <div className="text-lg md:text-xl font-bold text-gray-700">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}

          {/* Promo Code Section */}
          <div className="bg-white rounded-xl shadow p-4 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">If you have a promocode, enter here:</h2>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                placeholder="Enter promocode"
                className="w-full sm:w-2/3 px-4 py-2 border rounded"
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Submit
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="bg-white rounded-xl shadow p-4 space-y-2 text-base md:text-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charge</span>
              <span>₹{deliveryCharge}</span>
            </div>
            <div className="flex justify-between font-bold text-lg md:text-xl">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
            <button
              onClick={() => navigate("/placeorder")}
              className="w-full md:w-auto mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
