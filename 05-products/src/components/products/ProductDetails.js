import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getProduct } from '../../services/ShopAPI';

const ProductDetails = () => {
	const navigate = useNavigate();
	const { productId } = useParams();
	const { data, isLoading, error } = useQuery(['product', productId], getProduct);

	if (isLoading) {
		return (
			<MoonLoader color={"#F8D41C"} size={50} />
		);
	}

	if (error) {
		return (
			<div className="alert alert-warning">
				<h2>Sorry, retrieving that product caused an error...</h2>
				<p><strong>Error message:</strong> {error.message}</p>
			</div>
		)
	}

	return (
		<div className="card">
			<div className="card-header">
				<h1 className="card-title h5 mb-0">{data.name}</h1>
			</div>

			<div className="card-body">
				<p>{data.description}</p>

				<p className="display-2">{data.price}</p>

				<h2 className="h4">Attributes</h2>
				<dl className="row">
					<dt className="col-sm-3">SKU</dt>
					<dd className="col-sm-9">{data.SKU}</dd>

					<dt className="col-sm-3">EAN</dt>
					<dd className="col-sm-9">{data.EAN}</dd>
				</dl>

				<button onClick={() => navigate(-1)} className="btn btn-secondary">&laquo; Back</button>
			</div>
		</div>
	);
}

export default ProductDetails;
