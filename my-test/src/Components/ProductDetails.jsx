import React,{useState , useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import './productdetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>

  return (
    <div>
      <h2 className='heading'>Product Description</h2>

    <div className=''>
      <Link to='/'>Back to Products</Link>
      <img 
      src={product.image}
      alt={product.title}
      className='product-image'
      />
       <h2 className="title">{product.title}</h2>
      <p className="price">${product.price}</p>
      <p className="desc">{product.description}</p>
    </div>

    </div>
  )
}

export default ProductDetails