import React, { useState } from 'react';
import { useMutation, useQueryCache } from 'react-query';
import { createProduct } from '../../services/ShopAPI';

const initialProduct = {
	name: "",
	price: "",
	description: "",
	SKU: "",
	EAN: "",
}

const CreateProductForm = () => {
	// set up mutation
	const [addProduct] = useMutation(createProduct);

	// get QueryCache from context
	const queryCache = useQueryCache();

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
		addProduct(product, {
			onSuccess: (data) => {
				console.log("Oh the happy days, adding product was a success!", data);

				// update querycache with the newly craeted product
				queryCache.setQueryData('products', (existingData) => [...existingData, data]);

				// empty form
				setProduct(initialProduct);
			},
		});

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
						value={product.name}
						className="form-control"
						placeholder="Enter the product name" />
				</div>

				<div className="form-group">
					<label htmlFor="price">Price (incl. currency)</label>
					<input
						type="text"
						id="price"
						onChange={handleInputChange}
						value={product.price}
						className="form-control" placeholder="" />
				</div>

				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea
						id="description"
						rows="10"
						onChange={handleInputChange}
						value={product.description}
						className="form-control"></textarea>
				</div>

				<div className="form-group">
					<label htmlFor="SKU">SKU</label>
					<input
						type="text"
						id="SKU"
						onChange={handleInputChange}
						value={product.SKU}
						className="form-control"
						placeholder="" />
				</div>

				<div className="form-group">
					<label htmlFor="EAN">EAN</label>
					<input
						type="text"
						id="EAN"
						onChange={handleInputChange}
						value={product.EAN}
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
