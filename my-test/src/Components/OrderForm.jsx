import React from 'react';

const OrderForm = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4 text-gray-800">
      <h2 className="text-2xl font-semibold border-b pb-2">Order Summary</h2>
      
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span className="font-medium">$293.94</span>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <span className="font-medium text-green-600">FREE</span>
      </div>

      <div className="flex justify-between">
        <span>Tax</span>
        <span className="font-medium">$23.52</span>
      </div>

      <div className="border-t pt-4 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>$317.46</span>
      </div>

      <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold transition duration-300">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderForm;
