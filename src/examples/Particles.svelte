<script lang="ts">
    import {tweened} from "svelte/motion";
    import {cubicOut} from "svelte/easing";

    import ParticleSystem, {CssVars} from "../ParticleSystem";
    import Flat from "../ParticleSystem/Flat.svelte";
    import {variablesToCss} from "../ParticleSystem/utils";
    import Particle from "../ParticleSystem/Particle.svelte";

    const GUY_PATH = 'M 103.322 79.689 L 103.322 128.908 Q 99.485 134.21 91.512 138.216 A 65.032 65.032 0 0 1 84.474 141.213 Q 70.997 146.096 54.786 146.096 A 55.351 55.351 0 0 1 36.989 143.304 A 49.799 49.799 0 0 1 26.564 138.381 A 51.733 51.733 0 0 1 8.536 119.184 A 62.409 62.409 0 0 1 7.179 116.603 A 68.636 68.636 0 0 1 0.648 94.471 A 85.236 85.236 0 0 1 0.001 84.767 L 0.001 60.353 A 77.824 77.824 0 0 1 2.016 42.315 A 64.443 64.443 0 0 1 6.74 29.006 Q 13.478 15.138 25.685 7.57 Q 37.892 0.002 53.126 0.002 A 67.683 67.683 0 0 1 68.199 1.59 A 46.851 46.851 0 0 1 87.648 10.842 A 41.695 41.695 0 0 1 102.414 35.868 A 55.675 55.675 0 0 1 103.126 40.431 L 97.853 40.431 A 48.308 48.308 0 0 0 94.437 28.363 A 35.909 35.909 0 0 0 83.693 14.357 Q 72.169 5.275 53.126 5.275 A 48.724 48.724 0 0 0 36.196 8.106 A 42.503 42.503 0 0 0 18.458 20.607 A 52.909 52.909 0 0 0 7.052 43.883 A 77.418 77.418 0 0 0 5.275 60.939 L 5.275 83.596 A 76.892 76.892 0 0 0 6.974 100.088 A 61.856 61.856 0 0 0 11.476 113.381 A 50.252 50.252 0 0 0 20.63 126.837 A 45.153 45.153 0 0 0 28.956 133.644 A 46.162 46.162 0 0 0 51.2 140.71 A 56.638 56.638 0 0 0 54.786 140.822 A 85.248 85.248 0 0 0 72.617 139.014 A 74 74 0 0 0 81.251 136.623 A 64.469 64.469 0 0 0 87.515 134.122 Q 93.81 131.186 97.125 127.563 A 16.953 16.953 0 0 0 98.048 126.467 L 98.048 85.06 L 54.591 85.06 L 54.591 79.689 L 103.322 79.689 Z M 240.333 38.478 L 279.493 135.939 L 280.177 133.986 L 316.7 38.478 L 322.56 38.478 L 275.294 162.502 L 272.95 168.361 A 37.552 37.552 0 0 1 267.878 177.283 A 24.262 24.262 0 0 1 247.755 186.818 Q 242.091 186.818 239.943 185.744 L 239.845 180.763 A 22.535 22.535 0 0 0 243.19 181.423 Q 244.861 181.629 246.725 181.642 A 36.103 36.103 0 0 0 246.974 181.642 A 23.481 23.481 0 0 0 253.474 180.782 A 18.57 18.57 0 0 0 260.743 176.808 A 24.465 24.465 0 0 0 264.562 172.436 Q 267.682 167.958 270.216 161.037 L 276.661 143.556 L 234.572 38.478 L 240.333 38.478 Z M 213.868 144.142 L 208.497 144.142 L 208.497 127.053 Q 203.81 135.842 194.825 140.969 A 36.465 36.465 0 0 1 184.999 144.732 Q 180.628 145.755 175.542 146.01 A 69.167 69.167 0 0 1 172.072 146.096 A 47.071 47.071 0 0 1 162.112 145.108 Q 155.767 143.734 151.058 140.447 A 26.095 26.095 0 0 1 146.144 135.988 A 33.014 33.014 0 0 1 140.046 124.933 Q 138.421 120.11 137.758 114.236 A 75.469 75.469 0 0 1 137.306 106.545 L 137.306 38.478 L 142.579 38.478 L 142.579 106.74 A 61.678 61.678 0 0 0 143.388 116.33 Q 145.065 126.204 150.197 132.179 Q 157.579 140.777 171.727 140.822 A 46.89 46.89 0 0 0 171.876 140.822 A 52.481 52.481 0 0 0 182.407 139.825 Q 190.556 138.156 196.486 133.693 Q 205.958 126.564 208.497 112.795 L 208.497 38.478 L 213.868 38.478 L 213.868 144.142 Z';

    const noiseSize = tweened<number>(0, {
        duration: 1000,
        easing: cubicOut,
    });
    let noiseInput = 15;
    $: noiseSize.set(1.5 ** noiseInput);
</script>

<div class="main">
    <div class="inputs">
        <label>Size: <input type="range" min={0} max={25} bind:value={noiseInput}/></label>
    </div>
    <div class="title-container">
        <div class="systems-location" style={variablesToCss({noiseSize: `${$noiseSize}%`})}>
            <CssVars vars={{
				particleSize: "1em",
				color: "#111",
				lifetime: 4,
				particleDeathOffsetY: '1em',
			}}>
                <ParticleSystem
                        numOfParticles={30}
                        path={GUY_PATH}
                >
                    <Particle><Flat/></Particle>
                </ParticleSystem>
            </CssVars>
            <div class="extraParticles">
                <CssVars vars={{
					particleSize: "1em",
					color: "#55eeee",
					lifetime: 4,
				}}>
                    <ParticleSystem
                            numOfParticles={30}
                            path={GUY_PATH}
                    >
                        <Particle><Flat/></Particle>
                    </ParticleSystem>
                </CssVars>
            </div>
            <div class="extraParticles">
                <CssVars vars={{
					particleSize: ".75em",
					color: "#222",
					lifetime: 2,
					particleDeathOffsetY: '2em',
				}}>
                    <ParticleSystem
                            numOfParticles={40}
                            path={GUY_PATH}
                    >
                        <Particle><Flat/></Particle>
                    </ParticleSystem>
                </CssVars>
            </div>
            <div class="extraParticles">
                <CssVars vars={{
				particleSize: ".1em",
				color: "#88eeee",
				lifetime: 2,
				particleDeathOffsetY: '-6em',
			}}>
                    <ParticleSystem
                            numOfParticles={50}
                            path={GUY_PATH}
                    >
                        <Particle><Flat/></Particle>
                    </ParticleSystem>
                </CssVars>
            </div>
            <div class="extraParticles">
                <CssVars vars={{
				particleSize: '.1em',
				color: '#fff',
				lifetime: 1,
				particleDeathOffsetY: '-2em',
			}}>
                    <ParticleSystem
                            numOfParticles={15}
                            path={GUY_PATH}
                    >
                        <Particle><Flat/></Particle>
                    </ParticleSystem>
                </CssVars>
            </div>
            <div class="extraParticles">
                <CssVars vars={{
				particleSize: '.1em',
				color: "#fff",
				lifetime: 4,
				particleDeathOffsetY: '-10em',
			}}>
                    <ParticleSystem
                            numOfParticles={15}
                            path={GUY_PATH}
                    >
                        <Particle><Flat/></Particle>
                    </ParticleSystem>
                </CssVars>
            </div>
        </div>
    </div>
</div>

<style>
    .main {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        overflow: hidden;
    }

    .inputs {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-grow: 0;
        width: 100%;
    }

    .inputs > label {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .inputs input {
        padding: unset;
        margin: unset;
    }

    .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 0;
        flex-grow: 1;
    }

    .systems-location {
        position: relative;
        transition: all .4s cubic-bezier(0, 1, .5, 1);

        --glowSize: 4em;
    }

    .systems-location:hover {
        --positionOffset: 5;
        --particleRotate: 45deg;
        --offsetRotate: -45deg;
        --glowSize: 2em;
        /*filter: brightness(.75);*/
    }

    .systems-location > .extraParticles {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }
</style>
