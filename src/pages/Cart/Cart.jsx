import React, { useContext } from "react";
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
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const subtotal = useSelector(getCartSubtotal);
  const deliveryCharge = useSelector(getCartDeliveryCharge);
  const totalAmount = useSelector(getCartTotalAmount);
  const { url } = useContext(StoreContext);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg md:text-xl">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Table */}
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white rounded-xl shadow text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-3 font-semibold">Items</th>
                  <th className="p-3 font-semibold">Title</th>
                  <th className="p-3 font-semibold">Price</th>
                  <th className="p-3 font-semibold">Quantity</th>
                  <th className="p-3 font-semibold">Total</th>
                  <th className="p-3 font-semibold">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.cartItemKey} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <img
                        src={`${url}/images/${item.image}`}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="p-3 font-medium">{item.name}</td>
                    <td className="p-3 font-medium">₹{item.price}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.cartItemKey))}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          −
                        </button>
                        <span className="min-w-[20px] text-center">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.cartItemKey))}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-3 font-semibold">
                      ₹{item.price * item.quantity}
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => dispatch(removeFromCart(item.cartItemKey))}
                        className="text-red-500 text-xl font-bold"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Promo Code */}
          <div className="bg-white rounded-xl shadow p-4 mb-6">
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              If you have a promocode, enter here:
            </h2>
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

          {/* Totals */}
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
        </>
      )}
    </div>
  );
};

export default Cart;
