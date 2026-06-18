<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m1.91 0 1.21 2.47v19.05L1.91 24h14.73l1.34-4.68H8.33V0ZM12 1.52c-0.91 0-1.80.11-2.650.31v1.74a9.74 9.74 0 0 1 2.65-0.37c5.27 0 9.54 4.18 9.54 9.35a9.2 9.2 0 0 1-2.3 6.09l-0.270.95-0.6 2.11c2.95-1.99 4.89-5.33 4.89-9.12C23.25 6.47 18.21 1.52 12 1.52Zm0 2.67c-0.92 0-1.810.15-2.650.41v13.71h8.82a8.25 8.25 0 0 0 2.36-5.77c0-4.62-3.82-8.36-8.53-8.36zM2.1 7.31A10.86 10.86 0 0 0 0.75 12.58c0 1.910.49 3.7 1.36 5.27z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
