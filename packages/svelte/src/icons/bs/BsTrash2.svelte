<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 3a0.70.7 0 0 1-0.040.23l-1.68 10.1A2 2 0 0 1 10.31 15H5.69a2 2 0 0 1-1.97-1.67L2.04 3.23A0.70.7 0 0 1 2 3c0-1.1 2.69-2 6-2s6 0.9 6 2M3.22 4.21l1.49 8.96a1 1 0 0 0 0.990.84h4.61a1 1 0 0 0 0.99-0.84l1.49-8.96C11.69 4.69 9.95 5 8 5s-3.69-0.31-4.78-0.79"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
