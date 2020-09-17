import React, { useState } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';
import CreateProductForm from './CreateProductForm';
import Product from './Product';

const Products = () => {
	const { isAuthenticated } = useAuth();

	const [showCreateProductForm, setShowCreateProductForm] = useState(false);
	// const { data, isLoading, error } = useProducts();
	const products = useProducts();

	if (products.isLoading) {
		return (
			<MoonLoader color={"#F8D41C"} size={50} />
		);
	}

	if (products.error) {
		return (
			<div className="alert alert-warning">
				<h2>Sorry, retrieving all products caused an error...</h2>
				<p><strong>Error message:</strong> {products.error.message}</p>
			</div>
		)
	}

	return (
		<>
			<h2>Products</h2>

			<p>There are {products.data.count} products in the database.</p>

			<div className="row">
				{products.data.map((product, index) => (
					<div className="col-lg-4 col-md-6" key={index}>
						<Product product={product} />
					</div>
				))}
			</div>

			{
				isAuthenticated() && (
					showCreateProductForm
					? (
						<CreateProductForm />
					) : (
						<div className="d-flex justify-content-end">
							<button className="btn btn-primary btn-lg" onClick={() => setShowCreateProductForm(true)}>+</button>
						</div>
					)
				)
			}
		</>
	);
}

export default Products;
