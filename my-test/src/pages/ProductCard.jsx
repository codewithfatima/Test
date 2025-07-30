import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { FaStarHalfStroke } from "react-icons/fa6";
import { BsCartPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/cardStore';

const ProductCard = ({ product }) => {
    const { addToCart } = useCartStore();


    return (
        <div>

            <div className='mt-10 cursor-pointer border border-yellow-500 rounded-lg px-5 py-4'>
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="mx-auto block h-32 w-full object-contain"
                    />
                </Link>
                <div className='text-left ml-3'>
                    <h3 className="text-sm mt-5">{product.title}</h3>
                    <div className="flex mt-2 text-yellow-500 text-sm">
                        <AiFillStar className="text-center" size={18} />
                        <AiFillStar className="text-center" size={18} />
                        <AiFillStar className="text-center" size={18} />
                        <FaStarHalfStroke className="text-center " size={18} />
                        <p>3.9  <span className="text-gray-600 ml-1">  (70 reviews)</span></p>
                    </div>
                    <p className="text-lg mt-2 text-yellow-500 font-bold">${product.price}</p>
                    <button className="border border-yellow-500 text-sm p-2 m-2 rounded-lg cursor-pointer w-[90%]">
                        <div className="text-black flex items-center justify-center gap-2">
                            <BsCartPlus size={18} className="font-bold" />
                            <span onClick={() => addToCart(product)}>Add to Cart</span>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard