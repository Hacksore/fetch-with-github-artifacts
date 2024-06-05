# bug in workers?

I can't seem to download a github action artifact in a worker but if you paste the same fetch code into node it works. Me thinks this has to do with `fetch` monkey patching??

### Repro

1. make a `.dev.vars` with a valid github pat named `GITHUB_TOKEN`
2. `npm run dev`
3. hit `http://127.0.0.1:8787`
4. be sad the API call failed 😞


### It working with normal `fetch`

1. make a `.dev.vars` with a valid github pat named `GITHUB_TOKEN`
2. `npm run working`
4. be amazing the API call succeeds 😁
