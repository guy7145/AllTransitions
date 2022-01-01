<script lang="ts">
    import {variablesToCss} from "./utils";
</script>

<div class="container" style={variablesToCss({cubeRotateSpeed: Math.random(), cubeRotateDirection: Math.random() > .5 ? 1 : -1})}>
    <div class="wall" style={variablesToCss({
        wallRotateX: 0,
        wallRotateY: 0,
        wallTranslate: 1,
    })}><slot name="front"/></div>
    <div class="wall" style={variablesToCss({
        wallRotateX: 0,
        wallRotateY: 2,
        wallTranslate: 1,
    })}><slot name="back"/></div>
    <div class="wall" style={variablesToCss({
        wallRotateX: 1,
        wallRotateY: 0,
        wallTranslate: 1,
    })}><slot name="top"/></div>
    <div class="wall" style={variablesToCss({
        wallRotateX: -1,
        wallRotateY: 0,
        wallTranslate: 1,
    })}><slot name="bottom"/></div>
    <div class="wall" style={variablesToCss({
        wallRotateX: 0,
        wallRotateY: 1,
        wallTranslate: 1,
    })}><slot name="right"/></div>
    <div class="wall" style={variablesToCss({
        wallRotateX: 0,
        wallRotateY: -1,
        wallTranslate: 1,
    })}><slot name="left"/></div>
</div>

<style>
    :root {
        --wallRotateX: 0;
        --wallRotateY: 0;
        --wallTranslate: 0;
        --cube-rotate-duration: 30s;
        --cube-rotate-direction: 1;
        --cube-rotate-initial-x: 0;
        --cube-rotate-initial-y: 0;
        --cube-rotate-initial-z: 0;
    }

    @keyframes cube-rotation {
        0% {
            transform:
                    rotateX(var(--cube-rotate-initial-x))
                    rotateY(var(--cube-rotate-initial-y))
                    rotateZ(var(--cube-rotate-initial-z))
                    rotate3d(1, 1, 1, 0deg);
        }

        100% {
            transform:
                    rotateX(var(--cube-rotate-initial-x))
                    rotateY(var(--cube-rotate-initial-y))
                    rotateZ(var(--cube-rotate-initial-z))
                    rotate3d(1, 1, 1, calc(360deg * var(--cube-rotate-direction)));
        }
    }

    .container {
        position: relative;
        width: var(--particleSize);
        height: var(--particleSize);

        transform-style: preserve-3d;
        animation: cube-rotation forwards infinite calc(var(--cube-rotate-duration)) linear;
    }

    .wall {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transform:
                rotateX(calc(90deg * var(--wallRotateX)))
                rotateY(calc(90deg * var(--wallRotateY)))
                translateZ(calc(var(--particleSize) / 2 * var(--wallTranslate)))
        ;
    }
</style>
