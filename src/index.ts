interface Env {
	GITHUB_TOKEN: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.method === 'GET') {
			console.log('Fetching the artifact');

			const file = await fetch('https://api.github.com/repos/Hacksore/overlayed/actions/artifacts/1569393086/zip', {
				method: 'GET',
				redirect: 'follow',
				headers: {
					Accept: 'application/vnd.github+json',
					Authorization: `Bearer ${env.GITHUB_TOKEN}`,
					'X-GitHub-Api-Version': '2022-11-28',
					'User-Agent': 'overlayed-updater v1',
				},
			}).then((res) => res.arrayBuffer());

			console.log(file.byteLength);
			return new Response(file);
		}

		return new Response('No');
	},
};
