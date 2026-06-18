<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 15v3.59a1 1 0 0 1 -1.71 0.71l-6.59 -6.59a1 1 0 0 1 0 -1.41l6.59 -6.59a1 1 0 0 1 1.71 0.71v3.59h3v6h-3"}],["path",{"d":"M21 15v-6"}],["path",{"d":"M18 15v-6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
