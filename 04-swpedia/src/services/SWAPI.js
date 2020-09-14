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
export const getFilm = async (key, id) => {
	return get(`films/${id}`);
}

export const getPeople = async (key, page) => {
	return get(`people/?page=${page}`);
}
export const getPerson = async (key, id) => {
	return get(`people/${id}`);
}

export const getPlanets = async (key, page) => {
	return get(`planets/?page=${page}`);
}
export const getPlanet = async (key, id) => {
	return get(`planets/${id}`);
}

export const getStarships = async (key, page) => {
	return get(`starships/?page=${page}`);
}
export const getStarship = async (key, id) => {
	return get(`starships/${id}`);
}

export const getSpecies = async (key, page) => {
	return get(`species/?page=${page}`);
}
export const getSpeciesDetails = async (key, id) => {
	return get(`species/${id}`);
}

export const getVehicles = async (key, page) => {
	return get(`vehicles/?page=${page}`);
}
export const getVehicle = async (key, id) => {
	return get(`vehicles/${id}`);
}
