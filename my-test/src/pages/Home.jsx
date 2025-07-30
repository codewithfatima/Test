import React from 'react';
import Banner from '../Components/Banner';
import Productlist from '../Components/Productlist';
import { useProducts } from '../hooks/useProducts';


const Home = () => {
    const { products, isLoading , error} = useProducts();

    if (isLoading) return <p style={{ padding: '4px' }}>Loading...</p>
    if (error) return <p style={{ padding: '4px', color: 'red' }}>{error}</p>



    return (
        <>
            <Banner />
            <Productlist  products={products}/>
        </>
    )
}


export default Home;