import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p style={{ padding: '4px' }}>Loading...</p>
    if (error) return <p style={{ padding: '4px', color: 'red' }}>{error}</p>


    return (
        <div>
            <h2 className='heading'>Product Details</h2>

            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-container">
                        <img src={product.image} alt={product.title} />
                        <h3 className="title">{product.title}</h3>
                        <p className="price">${product.price}</p>
                        <button className='btn'>

                            <Link
                                to={`/product/${product.id}`}
                                style={{ color: 'white', textDecoration: 'none' }}
                            >
                                View Details
                            </Link>


                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home