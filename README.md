# bug in workers?

I can't seem to download a github action artifact in a worker but if you paste the same fetch code into node it works. Me thinks this has to do with `fetch` monkey patching??

### Repro

1. make a `.dev.vars` with a valid github pat named `GITHUB_TOKEN`
2. `npm run dev`
3. hit `http://127.0.0.1:8787`
4. be sad the API call failed 😞

github API error:
```
<?xml version="1.0" encoding="utf-8"?>
<Error>
	<Code>InvalidAuthenticationInfo</Code>
	<Message>Authentication information is not given in the correct format. Check the value of Authorization header. RequestId:186d3e95-801e-00d9-7879-b727d8000000 Time:2024-06-05T18:51:15.5745960Z
	</Message>
</Error>
```

### It working with normal `fetch`

1. make a `.dev.vars` with a valid github pat named `GITHUB_TOKEN`
2. `npm run working`
4. be amazing the API call succeeds 😁
