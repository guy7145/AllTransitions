<script>
    import ParticleSystem from "../../ParticleSystem/FollowPath.svelte";
    import CssVars from "../../ParticleSystem/CssVars.svelte";
    import Pillar from "./Pillar.svelte";

    const pillarLayers = [1, 2, 3, 4, 5];
    const colors = [
        '#351919',
        '#3e1a1a',
        '#5b2929',
        '#543434',
        '#734949',
    ];

    const curve = {x: 75, y: 150};
    const sizeFromLayer = i => 300 * i**.5;
    const pathFromLayer = i => {
        const size = sizeFromLayer(i);
        const y = i * 10;
        return `M 0 ${y} C ${curve.x} ${curve.y * i} ${size - curve.x} ${curve.y * i} ${size} ${y}`;
    };
</script>

<div class="main">
    <div class="camera">
        <div class="pulse"></div>
        {#each pillarLayers as layerNumber}
            <div class="layer-container">
                <CssVars vars={{
                    particleSize: "1em",
                    color: colors[layerNumber - 1],
                    noiseSize: '0em',
                    pillar: {
                        animation: {
                            duration: layerNumber * .2,
                            delay: 1 + layerNumber * .1,
                        },
                        scale: {
                            x: 1 + layerNumber * .25,
                            y: layerNumber * 4,
                        }
                    }
                }}>
                    <ParticleSystem
                            numOfParticles={10 * (layerNumber + 2)}
                            path={pathFromLayer(layerNumber)}
                    >
                        <Pillar/>
                    </ParticleSystem>
                </CssVars>
            </div>
        {/each}
    </div>
</div>

<style>
    .main {
        height: 100%; width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .main * {
        user-select: none;
    }

    @keyframes camera-move {
        0% {
            transform: rotateX(90deg) scale(2);
        }
        100% {
            transform: rotateX(70deg) scale(1);
        }
    }

    .camera {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        transform-origin: center;
        transform-style: preserve-3d;
        transform: rotateX(90deg);
        animation: camera-move forwards 5s cubic-bezier(0, 1, .5, 1);
        /*transform: rotateX(85deg);*/
    }

    .layer-container {
        /*transform-style: preserve-3d;*/
        position: absolute;
        top: 50%;
    }

    @keyframes pulse-animation {
        0% {
            transform: scale(0);
            border-width: 1em;
        }
        100% {
            transform: scale(5);
            border-width: 0;
            border-color: transparent;
        }
    }

    .pulse {
        border: solid #fff;
        position: absolute;
        height: 5em;
        width: 5em;
        top:  calc(50% - 5em);
        left: calc(50% - 5em);
        border-radius: 100%;
        animation: pulse-animation forwards 1s cubic-bezier(0, 1, .5, 1);

    }
</style>