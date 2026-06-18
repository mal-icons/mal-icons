<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 11v8h0.05c0.25 1.69 1.69 3 3.45 3 1.17 0 2.07-0.42 2.67-1.17a3.99 3.99 0 0 0 5.67-0.01c0.60.76 1.5 1.19 2.66 1.19 1.93 0 3.5-1.57 3.5-3.5V11c0-4.96-4.04-9-9-9s-9 4.04-9 9zm6 1c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm6-4c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
