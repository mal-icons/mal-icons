<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 10c0 0.550.45 1 1 1h17c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1zm1 5h3c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1 0.45-1 1s0.45 1 1 1zm7 0h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1zm7 0h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
