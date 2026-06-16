<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-2.5 4A2.5 2.5 0 0 1 18 9.5c0.42 0 0.80.11 1.150.29l-3.36 3.36c-0.18-0.35-0.29-0.73-0.29-1.15zm2.5 2.5c-0.42 0-0.8-0.11-1.15-0.29l3.36-3.36c0.180.350.290.730.29 1.15a2.5 2.5 0 0 1-2.5 2.5z"}],["path",{"d":"M17 18H7V6h10v1h2V3c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1z"}],["path",{"d":"M7 3h10v1H7zm0 17h10v1H7z","opacity":".3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
