import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

export const useProducts = () => {
    const { data, error, isLoading } =  useSWR('https://fakestoreapi.com/products', fetcher);
    return {
        products: data,
        isLoading,
        isError: error,
    };
}


