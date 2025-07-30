import React, { useEffect } from 'react';
import Search from './Search';
import { useProducts } from '../hooks/useProducts';
import ProductCard from './ProductCard';
import { useCartStore } from '../store/cardStore';
import ShowModal from '../Components/ShowModal';

const ProductPage = () => {
  const { products, isLoading } = useProducts();
  const { cards, setCards, search, sort } = useCartStore();

  useEffect(() => {
    if (products && products.length) {
      setCards(products);
    }
  }, [products, setCards]);

  const filteredProducts = cards
    ?.filter((p) =>
      p.title?.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'lowToHigh') return a.price - b.price;
      if (sort === 'highToLow') return b.price - a.price;
      return 0;
    });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <Search />
      <ShowModal />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
