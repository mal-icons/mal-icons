<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m5.9-2.8a0.50.5 0 1 0-0.710.71L9.29 10H6.53a0.50.5 0 0 0 0 1H10.5a0.50.5 0 0 0 0.5-0.5V6.53a0.50.5 0 0 0-1 0v2.77z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
