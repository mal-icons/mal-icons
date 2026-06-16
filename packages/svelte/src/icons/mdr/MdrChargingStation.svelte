<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 1H7c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm0 17H7V6h10v12zm-4.5-7V9.12c0-0.53-0.71-0.7-0.95-0.22l-1.69 3.38c-0.160.330.080.720.450.72h1.19v1.88c0 0.530.710.70.950.22l1.69-3.38a0.50.5 0 0 0-0.45-0.72H12.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
