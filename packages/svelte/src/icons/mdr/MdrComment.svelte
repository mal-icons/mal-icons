<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21.99 4c0-1.1-0.89-2-1.99-2H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h14l4 4-0.01-18zM17 14H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h10c0.55 0 1 0.45 1 1s-0.45 1-1 1zm0-3H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h10c0.55 0 1 0.45 1 1s-0.45 1-1 1zm0-3H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h10c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
