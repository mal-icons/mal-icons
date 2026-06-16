<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 13c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1V5h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v6H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v6H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h16c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-6h1zm-8 3c-1.66 0-3-1.32-3-2.95 0-1.160.41-1.58 2.24-3.68a11 0 0 1 1.51 0c1.82 2.09 2.24 2.52 2.24 3.68C15 14.68 13.66 16 12 16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
