<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M12 8.25v-1.5m0 1.5c-1.35 0-2.70.06-4.020.17C6.85 8.51 6 9.47 6 10.61v2.51m6-4.87c1.36 0 2.70.06 4.020.17C17.16 8.51 18 9.47 18 10.61v2.51M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.50.75a3.35 3.35 0 0 1-3 0 3.35 3.35 0 0 0-3 0 3.35 3.35 0 0 1-3 0 3.35 3.35 0 0 0-3 0 3.35 3.35 0 0 1-3 0L3 16.5m15-3.38a48.47 48.47 0 0 0-6-0.37c-2.03 0-4.030.13-6 0.37m12 0c0.390.050.780.1 1.160.16 1.070.16 1.84 1.09 1.84 2.17v5.17c0 0.62-0.5 1.13-1.12 1.13H4.13A1.13 1.13 0 0 1 3 20.63v-5.17c0-1.080.77-2.01 1.84-2.17A47.78 47.78 0 0 1 6 13.12M12.27 3.11a0.380.38 0 1 1-0.53 0L12 2.85l0.270.27Zm-3 0a0.380.38 0 1 1-0.53 0L9 2.85l0.270.27Zm6 0a0.380.38 0 1 1-0.53 0L15 2.85l0.270.27Z"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
