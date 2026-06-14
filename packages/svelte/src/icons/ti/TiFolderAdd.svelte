<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 6h-6c0-1.1-0.9-2-2-2h-4c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h12c1.65 0 3-1.35 3-3v-8c0-1.65-1.35-3-3-3zm0 12h-12c-0.55 0-1-0.45-1-1v-7h4c0.28 0 0.5-0.220.5-0.5s-0.22-0.5-0.5-0.5h-4v-2c0-0.550.45-1 1-1h4c0 1.10.9 2 2 2h6c0.55 0 1 0.45 1 1h-4c-0.28 0-0.50.23-0.50.5s0.230.50.50.5h4v7c0 0.55-0.45 1-1 1zM15 12h-2v-2c0-0.55-0.45-1-1-1s-1 0.45-1 1v2h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
