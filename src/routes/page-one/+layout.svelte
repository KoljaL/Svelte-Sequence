<script>
	let color = 'color: MediumPurple;';
	let ms = performance.now();

	console.log('%croutes/+layout.svelte', color, ms);

	import Header from '$lib/layout/Header-one.svelte';

	export let data;

	console.log('%croutes/+layout.svelte data', color, data);
</script>

<Header />
<br />

<slot />
