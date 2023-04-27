<script>
	let ms = performance.now();
	let color = 'color: LightCoral;';
	console.log('%clib/layout/Header.svelte', color, ms);
</script>

<div>Root Header</div>

<style>
	div {
		display: inline-block;
		color: LightCoral;
		padding: 1rem;
		margin: 1rem;

		border: 1px solid LightCoral;
	}
</style>
