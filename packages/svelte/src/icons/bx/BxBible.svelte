<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 22h15v-2H6.01C5.55 19.99 5 19.81 5 19s0.55-0.99 1.01-1H21V4c0-1.1-0.9-2-2-2H6c-1.21 0-3 0.8-3 3v14c0 2.2 1.79 3 3 3zM5 8V5c0-0.80.55-0.99 1-1h13v12H5V8z"}],["path",{"d":"M11 14h2v-4h2V8h-2V6h-2v2H9v2h2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
