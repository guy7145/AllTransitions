<script>
    import ParticleSystem from "../ParticleSystem/FollowPath.svelte";
    import Cube from "../ParticleSystem/Cube.svelte";
    import CssVars from "../ParticleSystem/CssVars.svelte";
    import CustomCube from "../ParticleSystem/CustomCube.svelte";
    import Particle from "../ParticleSystem/Particle.svelte";

    const path = 'M 0 0';
</script>

<div class="main">
    <div class="systems-location">
        <CssVars vars={{
				particleSize: "15em",
				color: "#bb88ee",
			}}>
            <CustomCube>
                <div class="menu-option" slot="front">New Game</div>
                <div class="menu-option" slot="back">Load Game</div>
                <div class="menu-option" slot="left">Options</div>
                <div class="menu-option" slot="right">Credits</div>
                <div class="menu-option" slot="top">Log In</div>
                <div class="menu-option" slot="bottom">Buy DLC</div>
            </CustomCube>
        </CssVars>
        <div class="extraParticles">
            <CssVars vars={{
				particleSize: "1em",
				color: "#376fcb",
				lifetime: 3.2,
				particleDeathOffsetY: '0',
				noiseSize: '35vh',
			}}>
                <ParticleSystem numOfParticles={10} path={path}>
                    <Particle><Cube/></Particle>
                </ParticleSystem>
            </CssVars>
        </div>
        <div class="extraParticles">
            <CssVars vars={{
				particleSize: ".5em",
				color: "#a1b9e5",
				lifetime: 6.1,
				particleDeathOffsetY: '0',
				noiseSize: '35vh',
			}}>
                <ParticleSystem numOfParticles={10} path={path}>
                    <Particle><Cube/></Particle>
                </ParticleSystem>
            </CssVars>
        </div>
        <div class="extraParticles">
            <CssVars vars={{
				particleSize: ".75em",
				color: "#667288",
				lifetime: 5.7,
				particleDeathOffsetY: '0',
				noiseSize: '25vh',
			}}>
                <ParticleSystem numOfParticles={8} path={path}>
                    <Particle><Cube/></Particle>
                </ParticleSystem>
            </CssVars>
        </div>
        <div class="extraParticles">
            <CssVars vars={{
				particleSize: ".25em",
				color: "#667288",
				lifetime: 7.3,
				particleDeathOffsetY: '0',
				noiseSize: '25vh',
			}}>
                <ParticleSystem numOfParticles={12} path={path}>
                    <Particle><Cube/></Particle>
                </ParticleSystem>
            </CssVars>
        </div>
    </div>
</div>

<style>
    .main {
        height: 100%; width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main:hover {
        background: rgba(100, 100, 100, .1);
    }

    .systems-location {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .4s cubic-bezier(0, 1, .5, 1);

        --glowSize: 4em;
    }

    .systems-location:hover {
        --positionOffset: 5;
        filter: brightness(1.5);
    }

    .systems-location > * {
        display: flex;
        justify-content: center; align-items: center;
    }

    .extraParticles {
        position: absolute;
        top: 50%;
        left: 50%;
        pointer-events: none;

        z-index: -1;
    }

    .menu-option {
        display: flex;
        justify-content: center; align-items: center;

        font-size: 1.5em;

        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border: solid 1px transparent;

        user-select: none;
        text-transform: capitalize;
        background: rgba(5, 12, 42, .85);
        transition: all .5s cubic-bezier(0, 1, 0.5, 1);
    }

    .menu-option:hover {
        transform: translateZ(1em);
        background: rgba(17, 35, 110, 0.9);
        border-color: rgba(255, 255, 255, .5);
        border-radius: .5em;
    }

    @keyframes dostuff {
        0% {
            transform: translateZ(1em) rotateY(0deg) scale(.5);
        }
        100% {
            transform: translateZ(1em) rotateY(calc(4 *360deg)) scale(1);
        }
    }
    .menu-option:active {
        animation: dostuff forwards 1s cubic-bezier(0, 1, 0.5, 1);
        border-color: rgba(255, 255, 255, .9);
    }
</style>