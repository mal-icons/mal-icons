<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 0h5.29A1 1 0 0 1 10 0.29L13.71 4a1 1 0 0 1 0.290.71v5.59l-2.73-2.73a1 1 0 0 0-1.520.13l-1.89 2.64-1.77-1.06a1 1 0 0 0-1.220.15L2 12.29V2a2 2 0 0 1 2-2m5.5 1.5v2a1 1 0 0 0 1 1h2zm-1.5 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"}],["path",{"d":"M10.56 8.27 14 11.71V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-0.29l3.58-3.58 2.56 1.54 2.43-3.39z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
