<script>
	let color = 'color: mediumorchid;';
	let ms = performance.now();

	console.log('%croutes/page-one/+layout.svelte', color, ms);

	import Header from '$lib/layout/Header-one.svelte';

	export let data;

	console.log('%croutes/page-one/+layout.svelte data', color, data);
</script>

<Header />
<br />

<slot />
