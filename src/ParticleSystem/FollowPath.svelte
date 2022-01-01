<script lang="ts">
    import {variablesToCss} from "./utils";

    export let numOfParticles = 1, path = '';

    const betterRandom = () => 2 * (Math.random() - 0.5);
    let particles = [];
    for (let i = 0; i < numOfParticles; i++) {
        particles.push({
            noise: {x: betterRandom(), y: betterRandom(), z: betterRandom()},
            position: (i * 100 / numOfParticles + betterRandom()) % 100,
        })
    }

    let svgElement = null;
    let svgDimensions = {height: 0, width: 0};
    $: if (svgElement) {
        const svgBBox = svgElement?.getBBox()
        svgDimensions = {
            height: svgBBox.height,
            width: svgBBox.width,
        };
    }
</script>

<div
        class="particles-container"
        style="{variablesToCss({
            path: `'${path}'`,
            svgHeight: `${svgDimensions.height}px`,
            svgWidth: `${svgDimensions.width}px`,
        })}"
>
    <svg bind:this={svgElement}><path d="{path}" fill="white"/></svg> <!--  sets the container's size  -->
    {#each particles as particle (particle.position)}
        <div
                class="particle-path"
                style="{variablesToCss({position: particle.position, noise: particle.noise})}"
        >
            <slot/>
        </div>
    {/each}
</div>

<style>
    :root {
        --path: '';
        --position: 0;
        --positionOffset: 0;
        --offsetRotate: 0deg;
        --svgHeight: 0;
        --svgWidth: 0;
    }

    .particles-container {
        position: relative;
        overflow: visible;
        transform-style: preserve-3d;

        height: var(--svgHeight);
        width: var(--svgWidth);
    }

    .particles-container svg {
        visibility: hidden;
        pointer-events: none;
    }

    .particle-path {
        transform-style: preserve-3d;
        offset-distance: calc(1% * var(--position) + 1% * var(--positionOffset));
        offset-path: path(var(--path));
        offset-rotate: var(--offsetRotate);
        position: absolute;
        top: 0;
        left: 0;

        transition: all 1s cubic-bezier(0, 1, .5, 1);
    }
</style>
