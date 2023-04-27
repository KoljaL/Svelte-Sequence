<script>
	let color = 'color: MediumPurple;';
	let ms = performance.now();

	console.log('%croutes/+layout.svelte', color, ms);

	import Header from '$lib/layout/Header.svelte';

	export let data;

	console.log('%croutes/+layout.svelte data', color, data);
</script>

<nav>
	<a href="./">home</a>
	<a href="./page-one">page-one</a>
</nav>
<Header />
<br />
<slot />

<style>
	nav {
		width: 300px;
		display: flex;
		justify-content: space-around;
	}
	a {
		text-decoration: none;
		color: #ff00aa;
		font-size: large;
		padding: 1rem;
	}
</style>
