<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.5 0a0.50.5 0 0 1 0.50.50.50.5 0 0 0 0.50.50.50.5 0 0 1 0.50.5V2a0.50.5 0 0 1-0.50.5h-5A0.50.5 0 0 1 5 2v-0.5a0.50.5 0 0 1 0.5-0.50.50.5 0 0 0 0.5-0.50.50.5 0 0 1 0.5-0.5z"}],["path",{"d":"M3.5 1h0.59A1.5 1.5 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-0.5q0-0.26-0.08-0.5h0.59A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
