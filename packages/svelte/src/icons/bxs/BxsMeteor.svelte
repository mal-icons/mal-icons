<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.51 2.14a1 1 0 0 0-1.150.1L4.2 9.2c-2.92 2.92-2.92 7.68 0 10.61a7.47 7.47 0 0 0 5.3 2.19c1.92 0 3.85-0.73 5.32-2.2l6.9-7.1A1 1 0 0 0 21 11h-3.3l4.18-7.51a1 1 0 0 0-1.36-1.36l-7.11 3.950.58-2.88a1 1 0 0 0-0.47-1.06zM14 14.5a4.5 4.5 0 0 1-9 0c0-1.570.81-2.95 2.03-3.75-0.010.08-0.020.17-0.020.25a2 2 0 1 0 3.85-0.77C12.67 10.8 14 12.49 14 14.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
