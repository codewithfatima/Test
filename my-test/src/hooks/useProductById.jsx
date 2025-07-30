// hooks/useProductById.js
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

export const useProductById = (id) => {
    const { data, error, isLoading } = useSWR(id ? `https://fakestoreapi.com/products/${id}` : null, fetcher);

    return {
        product: data,
        isLoading,
        isError: error,
    };
};
