<script>
    import Cube from "../../ParticleSystem/Cube.svelte";
    import {variablesToCss} from "../../ParticleSystem/utils";
    import CustomCube from "../../ParticleSystem/CustomCube.svelte";
</script>

<div class="pillar" style={variablesToCss({
    cube: {
        rotate: {
            direction: 0,
        }
    }
})}>
    <CustomCube>
        <div class="wall front" slot="front"></div>
        <div class="wall back" slot="back"></div>
        <div class="wall side" slot="left"></div>
        <div class="wall side" slot="right"></div>
        <div class="wall top" slot="top"></div>
        <div class="wall bottom" slot="bottom"></div>
    </CustomCube>
</div>

<style>
    :root {
        --pillar-scale-x: 1;
        --pillar-scale-y: 1;
        --pillar-animation-duration: 5s;
        --pillar-animation-delay: 1s;
    }

    @keyframes raise-pillar {
        0% {
            transform: scale(var(--pillar-scale-x), 0);
        }
        100% {
            transform: scale(var(--pillar-scale-x), var(--pillar-scale-y));
        }
    }

    .pillar {
        /*height: 100%;*/
        /*width: 100%;*/

        /*border: solid 2px #fff;*/
        transform-origin: bottom;
        transform-style: preserve-3d;
        transform: scale(var(--pillar-scale-x), var(--pillar-scale-y));
        animation:
                raise-pillar
                both
                calc(var(--pillar-animation-duration) * 1s)
                calc(var(--pillar-animation-delay) * 1s)
                cubic-bezier(0, 1, .5, 1);
    }

    .wall {
        width: 100%;
        height: 100%;
        background: var(--color);
    }

    .top {
        filter: brightness(1);
    }

    .back {
        filter: brightness(.5) drop-shadow(0 -1em 1em rgba(0, 0, 0, 0.2));
    }

    .front {
        filter: brightness(1);
    }
</style>