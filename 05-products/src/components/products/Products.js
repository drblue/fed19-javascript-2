import React, { useState } from 'react';
import { useQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getProducts } from '../../services/ShopAPI';
import CreateProductForm from './CreateProductForm';
import Product from './Product';

const Products = () => {

	const [showCreateProductForm, setShowCreateProductForm] = useState(false);
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
					<div className="col-lg-4 col-md-6" key={index}>
						<Product product={product} />
					</div>
				))}
			</div>

			{
				showCreateProductForm
				? (
					<CreateProductForm />
				) : (
					<div className="d-flex justify-content-end">
						<button className="btn btn-primary btn-lg" onClick={() => setShowCreateProductForm(true)}>+</button>
					</div>
				)
			}
		</>
	);
}

export default Products;
