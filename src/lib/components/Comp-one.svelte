<script>
	let ms = performance.now();
	let color = 'color: IndianRed;';
	console.log('%clib/components/Comp-one.svelte', color, ms);
</script>

<div>Page-one Component</div>

<style>
	div {
		display: inline-block;
		color: IndianRed;
		padding: 1rem;
		margin: 1rem;

		border: 1px solid IndianRed;
	}
</style>
