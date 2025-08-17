import type { Repos } from "../models/repositories";

const user = 'luizmarinhojr';

export async function fetchRepos(): Promise<Repos> {
	try {
		const response = await fetch(`https://api.github.com/users/${user}/repos`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const repos: Repos = await response.json();
		return repos;
	} catch (error) {
		console.error('Failed to fetch repositories:', error);
		return [];
	}
}