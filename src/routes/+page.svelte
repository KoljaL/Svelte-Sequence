<script>
	let color = 'color: LimeGreen;';
	let ms = performance.now();

	console.log('%croutes/+page.svelte', color, ms);

	import Comp from '$lib/components/Comp.svelte';

	export let data;

	console.log('%croutes/+page.svelte data', color, data);
</script>

<Comp />
