import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	return (
		<div className="card mb-3">
			<div className="card-body">
				<h5 className="card-title mb-1"><Link to={`/products/${product.id}`}>{product.name}</Link></h5>
				<p className="display-3 text-center">{product.price}</p>
			</div>
		</div>
	);
}

export default Product;
