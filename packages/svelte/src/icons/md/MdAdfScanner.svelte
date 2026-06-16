<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zM8 6h8v6H8V6zm12 12H4v-3c0-0.550.45-1 1-1h14c0.55 0 1 0.45 1 1v3z"}],["circle",{"cx":"18","cy":"16","r":"1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
