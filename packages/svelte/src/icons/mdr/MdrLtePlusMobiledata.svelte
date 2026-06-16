<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 14h2c0.55 0 1 0.45 1 1s-0.45 1-1 1H2c-0.55 0-1-0.45-1-1V9c0-0.550.45-1 1-1s1 0.45 1 1v5zm3-4h1v5c0 0.550.45 1 1 1s1-0.45 1-1v-5h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H6c-0.55 0-1 0.45-1 1s0.45 1 1 1zm7 6h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2v-1h2c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2v-1h2c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1zm10-5h-1v-1c0-0.55-0.45-1-1-1s-1 0.45-1 1v1h-1c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v1c0 0.550.45 1 1 1s1-0.45 1-1v-1h1c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
