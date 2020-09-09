import axios from 'axios';

const requestConfig = {
	auth: {
		username: 'drblue',
		password: process.env.REACT_APP_GITHUB_TOKEN
	}
}

const get = async (endpoint) => {
	const res = await axios.get(`https://api.github.com/${endpoint}`, requestConfig);
	return res.data;
}

export const getProfile = async (key, username) => {
	return get(`users/${username}`);
}

export const getRepositories = async (key, username) => {
	return get(`users/${username}/repos`);
}
