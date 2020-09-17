import axios from 'axios';

const requestConfig = {}
const baseApiUrl = 'https://crudcrud.com/api/' + process.env.REACT_APP_CRUDCRUD_API_ENDPOINT;

/**
 * HTTP GET
 *
 * @param {String} endpoint API endpoint
 */
const get = async (endpoint) => {
	const res = await axios.get(baseApiUrl + endpoint, requestConfig);
	return res.data;
}

/**
 * HTTP POST
 *
 * @param {String} endpoint API endpoint
 * @param {Object} data Payload
 */
const post = async (endpoint, data) => {
	const res = await axios.post(baseApiUrl + endpoint, data, requestConfig);
	return res.data;
}

/**
 *
 * (Bogus) Authentication
 *
 */

export const login = async (username, password) => {
	return (username === "jn" && password === "apa")
		? {
			"id": 1,
			"username": "jn",
			"email": "jn@thehiveresistance.com",
			"roles": ["superuser"],
		} : false;
}

/**
 *
 * Products
 *
 */

/**
 * Create a new product
 *
 * @param {Object} product
 */
export const createProduct = async (product) => {
	return post(`/products`, product);
}

/**
 * Get all products
 */
export const getProducts = async () => {
	return get(`/products`);
}

/**
 * Get a single product
 *
 * @param {String} key (not used)
 * @param {Number} id ID of product to get
 */
export const getProduct = async (key, id) => {
	return get(`/products/${id}`);
}
