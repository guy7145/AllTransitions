<script lang="ts">
	import Particles from "./examples/Particles.svelte";
	import CubeMenu from "./examples/CubeMenu.svelte";
	import EarthBending from "./examples/EarthBending/EarthBending.svelte";
</script>

<main>
	<Particles/>
</main>

<style>
	:global(body) {
		background: #000;
		color: #fff;
		padding: 0;
	}

	main {
		width: 100%;
		height: 100%;
	}
</style>
