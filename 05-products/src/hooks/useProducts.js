import React from 'react';
import { useQuery } from 'react-query';
import { getProducts } from '../services/ShopAPI';

const useProducts = () => {
	return useQuery('products', getProducts);
}

export default useProducts;
