import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { useCartStore } from "../store/cardStore";
import { useProducts } from '../hooks/useProducts';

const Search = () => {
    const { cards, search, setSearch, addProduct, sort, setSort } = useCartStore();

    return (
        <div>
            <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 w-[50%] md:max-w-md bg-white shadow-sm">
                    <CiSearch className="text-black text-xl" />
                    <input
                        type="search"
                        placeholder="Search products..."
                        className="w-full outline-none text-sm text-black"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="flex gap-4 justify-end ">
                    <select
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white shadow-sm "
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="">Sort by: All</option>
                        <option value="lowToHigh">Sort By : Low to High</option>
                        <option value="highToLow">Sort By : High to Low</option>
                    </select>
                    <button className="bg-yellow-500 text-white px-4 py-2 cursor-poninter rounded-md shadow-md hover:bg-blue-700 text-sm"
                    
                    onClick={addProduct}>
                        + Add Product
                    </button>
                </div>


            </div>

        </div>
    )
}

export default Search