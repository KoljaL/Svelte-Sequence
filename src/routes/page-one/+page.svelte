<script>
	let color = 'color: greenyellow;';
	let ms = performance.now();

	console.log('%croutes/page-one/+page.svelte', color, ms);

	import Comp from '$lib/components/Comp-one.svelte';

	export let data;

	console.log('%croutes/page-one/+page.svelte data', color, data);
</script>

<Comp />
