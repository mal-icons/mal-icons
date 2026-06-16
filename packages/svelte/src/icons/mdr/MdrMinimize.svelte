<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 19h10c0.55 0 1 0.45 1 1s-0.45 1-1 1H7c-0.55 0-1-0.45-1-1s0.45-1 1-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
