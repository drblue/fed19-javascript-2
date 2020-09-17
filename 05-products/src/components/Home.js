import React from 'react';

/*
const somethingThatReturnsAnArray = () => {
	const products = ['Produkt 1', 'Produkt 2', 'Produkt 3'];
	const orders = ['Order 1', 'Order 2', 'Order 3', 'Order 4'];

	return [
		products,	// [0]
		orders		// [1]
	];
}
*/

/*
const somethingThatReturnsAnObject = () => {
	const products = ['Produkt 1', 'Produkt 2', 'Produkt 3'];
	const orders = ['Order 1', 'Order 2', 'Order 3', 'Order 4'];

	return {
		products: products,
		orders: orders
	};
}
*/

/*
const somethingThatReturnsAnArrayThatContainsAnObject = () => {
	const products = ['Produkt 1', 'Produkt 2', 'Produkt 3'];
	const orders = ['Order 1', 'Order 2', 'Order 3', 'Order 4'];
	const callback = () => true;

	return [
		callback,								// [0]
		{ products: products, orders: orders }	// [1]
	];
}
*/

const Home = () => {

	/*
	// const data = somethingThatReturnsAnArray();	// data = [ ['Produkt 1', ...], ['Order 1', ...] ]
	// const products = data[0];
	// const orders = data[1];
	const [produkter, bestallningar] = somethingThatReturnsAnArray();
										// [0] = ['Produkt 1', ...],
										// [1] = ['Order 1', ...]
	*/

	/*
	// const data = somethingThatReturnsAnObject();
	// const products = data.products;
	// const orders = data.orders;
	const { orders } = somethingThatReturnsAnObject();
							// {
							//   products: ['Produkt 1', ...],
							//   orders: ['Order 1', ...]
							// }

	// const data = somethingThatReturnsAnObject();
	// const orders = data.orders;
	*/

	// const [queryWasSuccessful, { orders }] = somethingThatReturnsAnArrayThatContainsAnObject();

	return (
		<div className="text-center mt-5">
			<h1 className="mb-2">Welcome to my shop</h1>
			<p className="display-1"><span role="img" aria-label="A bag of cash">💰</span></p>
		</div>
	);
}

export default Home;
