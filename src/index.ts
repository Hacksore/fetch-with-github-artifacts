interface Env {
	GITHUB_TOKEN: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.method === 'GET') {
			console.log('Fetching the artifact');

			console.log(env.GITHUB_TOKEN.slice(-5));
			const response = await fetch('https://api.github.com/repos/Hacksore/overlayed/actions/artifacts/1569393086/zip', {
				headers: {
					Accept: 'application/vnd.github+json',
					Authorization: `Bearer ${env.GITHUB_TOKEN}`,
					'X-GitHub-Api-Version': '2022-11-28',
					'User-Agent': 'overlayed-updater v1',
				},
			});
			console.log(response);

			const fileResponse = await fetch(response.url);

			// save to file
			console.log('Saving to file', (await fileResponse.arrayBuffer()).byteLength);

			return new Response();
		}

		return new Response('No');
	},
};
