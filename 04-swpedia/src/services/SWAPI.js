import axios from 'axios';

const requestConfig = {}
const baseApiUrl = 'https://swapi.dev/api/';

const get = async (endpoint) => {
	const res = await axios.get(baseApiUrl + endpoint, requestConfig);
	return res.data;
}

export const getFilms = async (key, page) => {
	return get(`films/?page=${page}`);
}

export const getPeople = async (key, page) => {
	return get(`people/?page=${page}`);
}

export const getPlanets = async (key, page) => {
	return get(`planets/?page=${page}`);
}

export const getStarships = async (key, page) => {
	return get(`starships/?page=${page}`);
}

export const getSpecies = async (key, page) => {
	return get(`species/?page=${page}`);
}

export const getVehicles = async (key, page) => {
	return get(`vehicles/?page=${page}`);
}
