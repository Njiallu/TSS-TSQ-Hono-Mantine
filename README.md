# Tanstack Start (SSR) + Tanstack Query (Client Cache) + Hono (API) Template

## Motivation

I've been frustrated a lot with Next.js lately, the lack of support for completion, long build times, large app footprint, etc...
I was using Tanstack Router a lot at work to the point I tried to use it inside of Next but it was a wierd experience.

Since Tanstack Start is now in beta, I said: why not try this new shiny toy ? \
Also for a long time I was using trpc and when I tried using Hono it gave me the same vibe, but REST. \
Which is why I switched to it for my future projects.

My goal with this, scafold project fast while not user & dev experience.
I think this is achieved here. But only time will tell.

## Roadmap

- [ ] Mantine (Fails when building)
- [ ] Basic auth with mails
- [ ] Svgr/Svgo
- [ ] Better default UIs

## Documentation

### I've built this on top of [Isnifer's template](https://github.com/isnifer/tanstack-start-ssr-hono/tree/master)

- [Tanstack Start Docs](https://tanstack.com/router/latest/docs/framework/react/start/build-from-scratch)
- [Tanstack Query Docs](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Hono Docs](https://hono.dev/docs/)
- [Vinxi Docs](https://vinxi.vercel.app/api/cli.html)
- [Vite Docs](https://vite.dev/guide/using-plugins.html)

## Important changes for Bun

- All `vinxi` commands are replaced with `bunx --bun` prefix to run them with Bun.
- Hono `fetch` function accepts not only `Request` object, but also `Bindings` from `Bun.env`.
- `app.config.ts` accepts `preset: 'bun'` in the `server` section.
