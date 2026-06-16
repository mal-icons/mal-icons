<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 7h4c1.1 0 2 0.9 2 2s-0.9 2-2 2h-4V7zm5 10h-5v-4h5c1.1 0 2 0.9 2 2s-0.9 2-2 2zm0-13c0-0.55-0.45-1-1-1s-1 0.45-1 1v1h-2V4c0-0.55-0.45-1-1-1s-1 0.45-1 1v1H7c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v10H7c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v1c0 0.550.45 1 1 1s1-0.45 1-1v-1h2v1c0 0.550.45 1 1 1s1-0.45 1-1v-1c2.21 0 4-1.79 4-4 0-1.45-0.78-2.73-1.94-3.430.59-0.690.94-1.590.94-2.57 0-1.86-1.27-3.43-3-3.87V4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
