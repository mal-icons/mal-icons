<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.24 15.06 7.21 2.38a0.450.45 0 0 1 0.85-0.14l2.12 3.98-4.94 8.85zM19.24 18.14 17.36 6.47a0.450.45 0 0 0-0.77-0.25L4.76 18.14l6.55 3.69c0.410.230.910.23 1.32 0l6.61-3.69zM13.92 7.96 12.4 5.05a0.450.45 0 0 0-0.8 0L4.94 16.99l8.98-9.03z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
