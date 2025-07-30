import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from "../store/cardStore";
import { MdDelete } from "react-icons/md";
import ShowModal from './ShowModal';

const Card = () => {
  const cart = useCartStore((state) => state.cart);
  const increseQuantity = useCartStore((state) => state.increseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [showModal, setShowModal] = useState(false);

  if (cart.length === 0) {
    return <p className="text-red-500 text-center mt-10">No items in cart.</p>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row items-center justify-between mb-6'>
        <h1 className='font-bold text-2xl sm:text-3xl mb-2 sm:mb-0'>Shopping Cart</h1>
        <p className='font-bold text-base sm:text-lg'>Items: {cart.length}</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center border border-yellow-500 mb-4 rounded-md p-4 shadow-md gap-4"
            >
              <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />

              {/* Info */}
              <div className="flex flex-col flex-grow w-full sm:w-[40%]">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3 text-sm font-medium">{item.quantity}</span>
                <button
                  onClick={() => increseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Item Total + Delete */}
              <div className="flex flex-col items-end gap-2">
                <p className="text-md font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
                <MdDelete
                  className="text-xl text-black cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                />

              {/* Optional Modal (you can trigger manually if needed) */}
              {showModal && (
                <ShowModal
                  item={item}
                  onCancel={() => setShowModal(false)}
                  onConfirm={(id) => {
                    removeFromCart(id);
                    setShowModal(false);
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 border border-yellow-500 rounded-lg p-4 shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-500">Items:</span>
            <span>{cart.length}</span>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-500">Subtotal:</span>
            <span>₹{total}</span>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-gray-500">Shipping:</span>
            <span>FREE</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
          <Link to="/checkout">
            <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
