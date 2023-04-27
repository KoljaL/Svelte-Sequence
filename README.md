# Svelte-Sequence

This is just a playground to get familiar with the order in which the individual files are loaded.

- The app is based on the [SvelteKit](https://kit.svelte.dev/) template.
- It uses the static-adapter.
- The app has two pages, home and page-one.
- Each page loads two separate components, in the `+page.svelte` and in the `+layout.svelte` files.
- Each file that is loaded contains only minimal code and a **colored output** for the console.
- The `*.js` files have a blocking promise.
- A build version of the app is available in the `docs` folder and can be viewed [here](xxx).

```bash
src
 ┣ lib
 ┃ ┣ components
 ┃ ┃ ┣ Comp-one.svelte
 ┃ ┃ ┗ Comp.svelte
 ┃ ┗ layout
 ┃ ┃ ┣ Header-one.svelte
 ┃ ┃ ┗ Header.svelte
 ┣ routes
 ┃ ┣ page-one
 ┃ ┃ ┣ +layout.js
 ┃ ┃ ┣ +layout.svelte
 ┃ ┃ ┣ +page.js
 ┃ ┃ ┗ +page.svelte
 ┃ ┣ +layout.js
 ┃ ┣ +layout.svelte
 ┃ ┣ +page.js
 ┃ ┗ +page.svelte
 ┣ app.html
 ┗ hooks.client.js
 ```