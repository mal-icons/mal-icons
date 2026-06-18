<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.01 18H21V4c0-1.1-0.9-2-2-2H6c-1.21 0-3 0.8-3 3v14c0 2.2 1.79 3 3 3h15v-2H6.01C5.55 19.99 5 19.81 5 19s0.55-0.99 1.01-1zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
