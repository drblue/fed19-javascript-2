import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createProduct } from '../../services/ShopAPI';

const initialProduct = {
	name: null,
	price: null,
	description: null,
	SKU: null,
	EAN: null,
}

const CreateProductForm = () => {
	// set up mutation
	const [mutate] = useMutation(createProduct);

	// set up state
	const [product, setProduct] = useState(initialProduct);

	const handleInputChange = (e) => {
		setProduct({
			...product,
			[e.target.id]: e.target.value
		});
	}

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!product.name || !product.name.length > 2) {
			console.log("thanks but no");
			return;
		}

		// trigger mutation
		console.log("triggering mutation");
		mutate(product);

		// (and handle lifecycle of mutation)
	}

	return (
		<>
			<h3>Create new product</h3>
			<form onSubmit={handleFormSubmit}>
				<div className="form-group">
					<label htmlFor="name">Product name</label>
					<input
						type="text"
						id="name"
						onChange={handleInputChange}
						className="form-control"
						placeholder="Enter the product name" />
				</div>

				<div className="form-group">
					<label htmlFor="price">Price (incl. currency)</label>
					<input
						type="text"
						id="price"
						onChange={handleInputChange}
						className="form-control" placeholder="" />
				</div>

				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						rows="10"
						onChange={handleInputChange}
						className="form-control"></textarea>
				</div>

				<div className="form-group">
					<label htmlFor="SKU">SKU</label>
					<input
						type="text"
						id="SKU"
						onChange={handleInputChange}
						className="form-control"
						placeholder="" />
				</div>

				<div className="form-group">
					<label htmlFor="EAN">EAN</label>
					<input
						type="text"
						id="EAN"
						onChange={handleInputChange}
						className="form-control"
						placeholder="" />
				</div>

				<div className="d-flex justify-content-end">
					<button type="submit" className="btn btn-primary">Create</button>
				</div>
			</form>
		</>
	);
}

export default CreateProductForm;
