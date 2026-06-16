<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.95 24c0.23 0 0.44-0.020.66-0.03L8.8 20.15l-1.33 1.34C4.2 19.93 1.86 16.76 1.5 13H0c0.51 6.16 5.66 11 11.95 11zm0.1-24c-0.23 0-0.440.02-0.660.04l3.81 3.81 1.33-1.33C19.8 4.07 22.14 7.24 22.5 11H24c-0.51-6.16-5.66-11-11.95-11zM16 6h-6v2h6v6h2V8a2 2 0 0 0-2-2zm2 12h2v-2H8V4H6v2H4v2h2v8a2 2 0 0 0 2 2h8v2h2v-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
