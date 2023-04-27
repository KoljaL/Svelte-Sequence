<script>
	let color = 'color: MediumPurple;';
	let ms = performance.now();

	console.log('%croutes/+layout.svelte', color, ms);

	import Header from '$lib/layout/Header.svelte';

	export let data;

	console.log('%croutes/+layout.svelte data', color, data);
</script>

<nav>
	<img src="./favicon.svg" alt="" />
	<a href="./">home</a>
	<a href="./page-one">page-one</a>
</nav>
<Header />
<br />
<slot />

<style>
	:global(body) {
		background-color: #242424;
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
	img {
		width: 30px;
		stroke: white;
	}
	nav {
		width: 300px;
		display: flex;
		justify-content: space-around;
	}
	a {
		text-decoration: none;
		color: MediumPurple;
		font-size: large;
		padding: 1rem;
	}
</style>
