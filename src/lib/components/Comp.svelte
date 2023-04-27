<script>
	let ms = performance.now();
	let color = 'color: IndianRed;';
	console.log('%clib/components/Comp.svelte', color, ms);
</script>

<div>Root Component</div>

<style>
	div {
		display: inline-block;
		color: IndianRed;
		padding: 1rem;
		margin: 1rem;

		border: 1px solid IndianRed;
	}
</style>
