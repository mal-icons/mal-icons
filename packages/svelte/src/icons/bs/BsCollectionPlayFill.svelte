<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.5 3.5a0.50.5 0 0 1 0-1h11a0.50.5 0 0 1 0 1zm2-2a0.50.5 0 0 1 0-1h7a0.50.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.26-6.44a0.50.5 0 0 1 0.510.01l4 2.5a0.50.5 0 0 1 0 0.85l-4 2.5A0.50.5 0 0 1 6 12V7a0.50.5 0 0 1 0.26-0.44"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
