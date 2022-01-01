<script lang="ts">
    import {variablesToCss} from "./utils";
</script>

<div class="hover-effects">
    <div class="particle" style="{variablesToCss({delay: Math.random(),})}">
        <slot/>
    </div>
</div>

<style>
    :root {
        --particleSize: 1em;
        --noise-y: 0;
        --noise-x: 0;
        --noise-z: 0;
        --particleDeathOffsetY: -1em;
        --color: #fff;
        --delay: 0;
        --lifetime: 1;
        --noiseSize: 0%;
        --glowSize: 0;
        --particleRotate: 0deg;
    }

    @keyframes particle-lifetime {
        0% {
            transform:
                    scale(.5)
                    translateX(calc(var(--noiseSize) * var(--noise-x)))
                    translateY(calc(var(--noiseSize) * var(--noise-y)))
                    rotate(var(--particleRotate));
            ;
            filter: brightness(1);
            box-shadow: 0 0 var(--glowSize) var(--color);
        }
        10% {
            transform:
                    scale(1)
                    translateX(calc(var(--noiseSize) * var(--noise-x)))
                    translateY(calc(var(--noiseSize) * var(--noise-y)))
            ;
            filter: brightness(1);
            box-shadow: 0 0 0 rgba(255, 255, 255, 0);
        }
        100% {
            transform:
                    scale(0)
                    translateX(calc(var(--noiseSize) * var(--noise-x)))
                    translateY(calc(var(--noiseSize) * var(--noise-y) + var(--particleDeathOffsetY)))
                    rotate(var(--particleRotate))
            ;
            filter: brightness(0);
            box-shadow: none;
        }
    }

    .particle {
        pointer-events: all;

        filter: drop-shadow(0 0 1em black);
        position: absolute;
        top: calc(50% - (var(--particleSize) / 2));
        left: calc(50% - (var(--particleSize) / 2));
        height: var(--particleSize);
        width: var(--particleSize);

        --aduration: calc(1s * var(--lifetime));
        --adelay: calc(var(--delay) * var(--lifetime) * 1s);

        transform-origin: center;
        animation:
                particle-lifetime
                forwards infinite
                var(--aduration)
                var(--adelay)
                cubic-bezier(.5, 0, .75, 1);
        transition: all .2s cubic-bezier(.5, 0, .75, 1);
    }

    .hover-effects {
    }
</style>
