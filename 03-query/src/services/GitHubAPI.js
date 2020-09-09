import axios from 'axios';

export const getProfile = async (key, username) => {
	const res = await axios.get(
		`https://api.github.com/users/${username}`,
		{
			auth: {
				username: 'drblue',
				password: process.env.REACT_APP_GITHUB_TOKEN
			}
		}
	);
	return res.data;
}

export const getRepositories = async (key, username) => {
	const res = await axios.get(
		`https://api.github.com/users/${username}/repos`,
		{
			auth: {
				username: 'drblue',
				password: process.env.REACT_APP_GITHUB_TOKEN
			}
		}
	);
	return res.data;
}
