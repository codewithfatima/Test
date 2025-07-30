// components/AddProductModal.jsx
import React, { useState } from 'react';
import { useCartStore } from '../store/cardStore';

const ShowModal = () => {
  const { openAddModal,  addProduct,toggleAddModal } = useCartStore();
  const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        img: ''
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title: form.title,
      price: parseFloat(form.price),
      category: form.category,
      image: form.image || 'https://via.placeholder.com/150',
    };
    addProduct(newProduct);
    setForm({ title: '', price: '', category: '', image: '' });
  };

  if (!openAddModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Product Title"
            className="border p-2 rounded"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="border p-2 rounded"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            className="border p-2 rounded"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            className="border p-2 rounded"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={toggleAddModal}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowModal;
