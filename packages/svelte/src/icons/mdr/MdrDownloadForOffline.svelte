<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V7c0-0.550.45-1 1-1s1 0.45 1 1v3h1.79c0.45 0 0.670.540.350.85l-2.79 2.79c-0.20.2-0.510.2-0.71 0l-2.79-2.79a0.50.5 0 0 1 0.36-0.85H11zm5 7H8c-0.55 0-1-0.45-1-1s0.45-1 1-1h8c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
