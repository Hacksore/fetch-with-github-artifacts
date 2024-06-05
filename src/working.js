console.log('Fetching the artifact');

const res = await fetch('https://api.github.com/repos/Hacksore/overlayed/actions/artifacts/1569393086/zip', {
	method: 'GET',
	redirect: 'follow',
	headers: {
		Accept: 'application/vnd.github+json',
		Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
		'X-GitHub-Api-Version': '2022-11-28',
		'User-Agent': 'overlayed-updater v1',
	},
});

console.log(res)

console.log('status', res.status);
console.log('signedUrl', res.url);

const arrayBuffer = await res.arrayBuffer();

console.log(arrayBuffer.byteLength);
