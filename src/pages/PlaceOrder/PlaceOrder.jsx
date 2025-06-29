import React from "react";
import { useSelector } from "react-redux";
import {
  getCartSubtotal,
  getCartDeliveryCharge,
  getCartTotalAmount,
} from "../../redux/cartslice"; // path adjust karo agar alag folder me ho

const PlaceOrder = () => {
  const subtotal = useSelector(getCartSubtotal);
  const deliveryFee = useSelector(getCartDeliveryCharge);
  const totalAmount = useSelector(getCartTotalAmount);

  return (
    <div className="max-w-6xl mx-auto pt-60 p-5 5 md:pt-2 min-h-screen w-full flex justify-center items-start md:items-center overflow-y-auto">
      <div className="flex flex-col md:flex-row justify-between gap-8 w-full py-6">
        {/* Delivery Information */}
        <div className="w-full md:w-[60%]">
          <h2 className="text-2xl font-semibold  mb-4">Delivery Information</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First name" className="w-1/2 border rounded px-4 py-2" />
              <input type="text" placeholder="Last name" className="w-1/2 border rounded px-4 py-2" />
            </div>
            <input type="email" placeholder="Email address" className="w-full border rounded px-4 py-2" />
            <input type="text" placeholder="Street" className="w-full border rounded px-4 py-2" />
            <div className="flex gap-4">
              <input type="text" placeholder="City" className="w-1/2 border rounded px-4 py-2" />
              <input type="text" placeholder="State" className="w-1/2 border rounded px-4 py-2" />
            </div>
            <div className="flex gap-4">
              <input type="text" placeholder="Zip code" className="w-1/2 border rounded px-4 py-2" />
              <input type="text" placeholder="Country" className="w-1/2 border rounded px-4 py-2" />
            </div>
            <input type="tel" placeholder="Phone" className="w-full border rounded px-4 py-2" />
          </form>
        </div>

        {/* Cart Totals */}
        <div className="w-full md:w-[40%] bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-semibold mb-4">Cart Totals</h2>
          <div className="space-y-2 text-base">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
