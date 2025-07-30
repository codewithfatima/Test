import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Personal Information */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name *" className="input" />
          <input type="text" placeholder="Last Name *" className="input" />
          <input type="email" placeholder="Email Address *" className="input" />
          <input type="tel" placeholder="Phone Number *" className="input" />
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Street Address *" className="input" />
          <input type="text" placeholder="City *" className="input" />
          <input type="text" placeholder="Province *" className="input" />
          <select className="input">
            <option>Select province</option>
            <option>Punjab</option>
            <option>Sindh</option>
            <option>KPK</option>
            <option>Balochistan</option>
          </select>
          <input type="text" placeholder="ZIP Code *" className="input" />
          <input type="text" placeholder="Country *" value="Pakistan" disabled className="input bg-gray-100 cursor-not-allowed" />
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

        <div className="space-y-4">
          <label className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer hover:border-yellow-500">
            <input type="radio" name="payment" className="mt-1" />
            <div>
              <span className="font-medium">Stripe Payment</span>
              <p className="text-sm text-gray-600">Secure payment with Stripe<br />+ $2.00 processing fee</p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer hover:border-yellow-500">
            <input type="radio" name="payment" className="mt-1" />
            <div>
              <span className="font-medium">Credit Card</span>
              <p className="text-sm text-gray-600">Direct credit card payment</p>
            </div>
          </label>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        <div className="flex justify-between text-lg font-semibold">
          <span>Pay with Stripe</span>
          <span>$319.46</span>
        </div>
        <p className="text-red-500 text-sm mt-2">
          Please fill in all required fields and correct any errors to proceed with payment.
        </p>
      </div>

      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-lg transition">
        Complete Payment
      </button>
    </div>
  );
};

export default CheckoutPage;
