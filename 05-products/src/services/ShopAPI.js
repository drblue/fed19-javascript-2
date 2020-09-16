import axios from 'axios';

const requestConfig = {}
const baseApiUrl = 'https://crudcrud.com/api/' + process.env.REACT_APP_CRUDCRUD_API_ENDPOINT + '/';

const get = async (endpoint) => {
	const res = await axios.get(baseApiUrl + endpoint, requestConfig);
	return res.data;
}

export const getProducts = async () => {
	// return get(`films/?page=${page}`);
	return [];
}
export const getProduct = async (key, id) => {
	// return get(`films/${id}`);
	return {};
}
