import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../Components/ProductDetails';
import { useProductById } from '../hooks/useProductById';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product, isLoading, isError } = useProductById(id);



  if (isLoading) return <p>Loading product...</p>;
  if (isError || !product) return <p className="text-red-500">Failed to load product.</p>;

  console.log("URL param ID:", id);
  console.log("Fetched product:", product);


  return  <ProductDetails product={product} />
};

export default ProductDetailsPage;
