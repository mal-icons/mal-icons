<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"m14.74 9-0.35 9m-4.79 0L9.26 9m9.97-3.21c0.340.050.680.11 1.020.17m-1.02-0.16L18.16 19.67a2.25 2.25 0 0 1-2.24 2.08H8.08a2.25 2.25 0 0 1-2.24-2.08L4.77 5.79m14.46 0a48.11 48.11 0 0 0-3.48-0.4m-12 0.56c0.34-0.060.68-0.11 1.02-0.16m0 0a48.11 48.11 0 0 1 3.48-0.4m7.5 0v-0.92c0-1.18-0.91-2.16-2.09-2.2a51.96 51.96 0 0 0-3.32 0c-1.180.04-2.09 1.02-2.09 2.2v0.92m7.5 0a48.67 48.67 0 0 0-7.5 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
