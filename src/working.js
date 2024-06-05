console.log('Fetching the artifact');

const file = await fetch('https://api.github.com/repos/Hacksore/overlayed/actions/artifacts/1569393086/zip', {
	method: 'GET',
	redirect: 'follow',
	headers: {
		Accept: 'application/vnd.github+json',
		Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		'X-GitHub-Api-Version': '2022-11-28',
		'User-Agent': 'overlayed-updater v1',
	},
}).then((res) => res.arrayBuffer());

console.log(file.byteLength);
