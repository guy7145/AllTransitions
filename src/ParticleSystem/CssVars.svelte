<script lang="ts">
    import {variablesToCss} from "./utils";

    export let vars = {};
</script>

<div class="vars-container" style={variablesToCss(vars)}>
    <slot/>
</div>

<style>
    .vars-container {
        transform-style: preserve-3d;
    }
</style>