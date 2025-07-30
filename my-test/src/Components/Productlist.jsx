import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsCartPlus, BsThreeDotsVertical } from 'react-icons/bs';
import { useCartStore } from '../store/cardStore';
import { MdDelete } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";
import { AiFillStar } from 'react-icons/ai';
import { FaStarHalfStroke } from "react-icons/fa6";


const ProductList = ({ products }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        img: ''
    });
    const {
        carts,
        cards,
        addToCart,
        removeFromCart,
        handleEdit,
        selectedProduct,
        openEditModal,
        updateProduct,
        closeEditModal
    } = useCartStore();


    // Sync Zustand selectedProduct to local form state
    useEffect(() => {
        if (selectedProduct) {
            setFormData({
                title: selectedProduct.title,
                price: selectedProduct.price,
                description: selectedProduct.description,
                category: selectedProduct.category,
                img: selectedProduct.image,
            });
        }
    }, [selectedProduct]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const updated = {
            ...selectedProduct,
            title: formData.title,
            price: formData.price,
            description: formData.description,
            category: formData.category,
            image: formData.img,
        };
        updateProduct(updated);
        closeEditModal();
    };


    if (!products || cards.products === 0) {
        return <p className="text-center mt-10">No products available.</p>;
    }
    useEffect(() => {
  if (products?.length > 0) {
    useCartStore.getState().setCards(products);
  }
}, [products]);


    return (
        <div className='pt-5'>
            <h2 className='font-bold text-[25px] m-10 text-center'>Latest Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-[1200px] mx-auto w-full">

                {cards.map(product => (
                    <div key={product.id} className="transition-transform duration-300 hover:scale-105 hover:shadow-xl group relative cursor-pointer border border-yellow-500 bg-white shadow-lg rounded-lg p-4 text-center">

                        {/* Three Dots Menu */}
                        <div className='absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 border border-yellow-500 p-2 rounded-md'>
                            <BsThreeDotsVertical
                                className='cursor-pointer'
                                onClick={() => setShowMenu(prev => prev === product.id ? null : product.id)}
                            />
                        </div>

                        {/* Dropdown */}
                        {showMenu === product.id && (
                            <div className='absolute top-7 right-1 w-38 bg-white shadow-md border border-yellow-500 rounded z-40 '>
                                <button
                                    className='flex items-center hover:bg-gray-100 w-full gap-3 cursor-pointer px-4 p-1'
                                    onClick={() => {
                                        handleEdit(product);
                                        setShowMenu(null);
                                    }}
                                >
                                    <CiEdit /> Edit
                                </button>

                                <button
                                    className='flex items-center hover:bg-gray-100 w-full gap-4 cursor-pointer px-3 py-1'
                                    onClick={() => {
                                        removeFromCart(product.id);
                                        setShowMenu(null);
                                    }}
                                >
                                    <MdDelete /> Delete
                                </button>

                            </div>
                        )}
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

                        </div>
                        <button className="border border-yellow-500 text-sm p-2 m-2 rounded-lg cursor-pointer w-[90%]">
                            <div className="text-black flex items-center justify-center gap-2">
                                <BsCartPlus size={18} className="font-bold" />
                                <span onClick={() => addToCart(product)}>Add to Cart</span>
                            </div>
                        </button>
                    </div>
                ))}

            </div>

            {/* Edit Modal */}
            {openEditModal && selectedProduct && (
                <div className='flex inset-0 fixed z-50 items-center justify-center bg-black/40 backdrop-blur-sm'>
                    <div className="bg-white rounded top-0 right-0 shadow-lg w-full max-w-md p-6 relative">
                        <h2 className='text-xl font-bold mb-3'>Edit Product</h2>
                        <p className='text-sm text-gray-600 mb-5'>Update the product information below.</p>

                        <button
                            onClick={closeEditModal}
                            className="cursor-pointer absolute top-4 right-4 text-gray-500 hover:text-red-500 text-lg font-bold"
                        >
                            ×
                        </button>

                        <div className='space-y-4'>
                            <label className="block text-sm font-medium">Product Title
                                <input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500'
                                />
                            </label>

                            <label className="block text-sm font-medium">Price
                                <input
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className='w-full border border-gray-300 rounded p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500'
                                />
                            </label>

                            <label className="block text-sm font-medium">Category
                                <input
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className='w-full border border-gray-300 p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded'
                                />
                            </label>

                            <label className="block text-sm font-medium">Image Url
                                <input
                                    name="img"
                                    value={formData.img}
                                    onChange={handleChange}
                                    className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </label>

                            <label className="block text-sm font-medium">Description
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={3}
                                    className='w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </label>

                            <button
                                onClick={handleSubmit}
                                className='bg-yellow-500 focus:outline-none py-2 px-6 text-white rounded-lg mr-4 cursor-pointer'
                            >
                                Save Changes
                            </button>
                            <button
                                onClick={closeEditModal}
                                className='hover:bg-blue-700 transition bg-yellow-500 focus:outline-none py-2 px-10 cursor-pointer text-white rounded-lg'
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
