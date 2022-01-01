<script lang="ts">
    import CustomCube from "./CustomCube.svelte";

</script>

<CustomCube>
    <div class="wall" slot="front"></div>
    <div class="wall" slot="back"></div>
    <div class="wall" slot="left"></div>
    <div class="wall" slot="right"></div>
    <div class="wall" slot="top"></div>
    <div class="wall" slot="bottom"></div>
</CustomCube>

<style>
    .wall {
        width: 100%;
        height: 100%;

        background: var(--color);
        /*border: solid 1px var(--color);*/
        /*filter: drop-shadow(0 0 2px #000);*/
    }
</style>