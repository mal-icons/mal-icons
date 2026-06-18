<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 8v11c0 2.2 1.79 3 3 3h15v-2H6.01C5.55 19.99 5 19.81 5 19c0-0.10.01-0.190.02-0.270.11-0.580.58-0.720.99-0.73H21V4c0-1.1-0.9-2-2-2H6c-1.21 0-3 0.8-3 3v3zm3-4h13v12H5V5c0-0.810.55-0.99 1-1z"}],["path",{"d":"M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
