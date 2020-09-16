import React from 'react';
import { useQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getProducts } from '../../services/ShopAPI';
import Product from './Product';

const Products = () => {

	const { data, isLoading, error } = useQuery(['products'], getProducts);

	if (isLoading) {
		return (
			<MoonLoader color={"#F8D41C"} size={50} />
		);
	}

	if (error) {
		return (
			<div className="alert alert-warning">
				<h2>Sorry, retrieving all products caused an error...</h2>
				<p><strong>Error message:</strong> {error.message}</p>
			</div>
		)
	}

	return (
		<>
			<h2>Products</h2>

			<p>There are {data.count} products in the database.</p>

			<div className="row">
				{data.map((product, index) => (
					<div className="col-lg-3 col-md-4 col-sm-6" key={index}>
						<Product product={product} />
					</div>
				))}
			</div>
		</>
	);
}

export default Products;
