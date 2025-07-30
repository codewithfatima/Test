import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const ProductDetails = ({ product }) => {
  if (!product) return <p className='text-red-500'>Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 gap-8  mt-10">
      <div className="flex flex-col md:flex-row gap-15">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/3 object-contain"
          style={{ maxHeight: '500px' }}
        />
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center text-yellow-500 text-sm">
            <AiFillStar className="mr-1" size={18} />
            <p>3.9 <span className="text-gray-600 ml-1">(70 reviews)</span></p>
          </div>
          <p className='mt-5 font-bold text-lg mb-5'>Description</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-yellow-500 text-xl font-bold mb-2">${product.price}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <div className='mt-5 text-sm text-gray-700 mb-10'>
            <p>✅ 100% original product.</p>
            <p>🚚 Cash on delivery is available.</p>
            <p>🔄 Return & exchange within 7 days.</p>
          </div>


          <Link to={'/cart'}>
            <button className='bg-yellow-500 py-2 px-8 text-white rounded-md cursor-pointer'>Add to Cart</button>
          </Link>
        </div>


      </div>
      <Link to='/' className=' mt-25 hover:text-yellow-500 font-bold ml-5'> ← Back to Products</Link>
    </div>
  )
}

export default ProductDetails
