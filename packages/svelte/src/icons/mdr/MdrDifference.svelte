<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7c0.55 0 1 0.45 1 1v13h13c0.55 0 1 0.45 1 1s-0.45 1-1 1H4c-1.1 0-2-0.9-2-2V8c0-0.550.45-1 1-1zm12.59-5.41c-0.38-0.38-0.89-0.59-1.42-0.59H8c-1.1 0-1.990.9-1.99 2L6 17c0 1.10.89 2 1.99 2H19c1.1 0 2-0.9 2-2V7.83c0-0.53-0.21-1.04-0.59-1.41l-4.82-4.83zM15.5 15h-4c-0.55 0-1-0.45-1-1s0.45-1 1-1h4c0.55 0 1 0.45 1 1s-0.45 1-1 1zm0-6h-1v1c0 0.55-0.45 1-1 1s-1-0.45-1-1V9h-1c-0.55 0-1-0.45-1-1s0.45-1 1-1h1V6c0-0.550.45-1 1-1s1 0.45 1 1v1h1c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
