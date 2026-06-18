<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 14v-3h3V9h-3V6h-2v3H8v2h3v3z"}],["path",{"d":"M20 22V4c0-1.1-0.9-2-2-2H6c-1.1 0-2 0.9-2 2v18l8-4.57L20 22zM6 10V4h12v14.55l-6-3.43-6 3.43V10z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
