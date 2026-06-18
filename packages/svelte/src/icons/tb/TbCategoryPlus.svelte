<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 4h6v6h-6v-6"}],["path",{"d":"M14 4h6v6h-6v-6"}],["path",{"d":"M4 14h6v6h-6v-6"}],["path",{"d":"M14 17h6m-3 -3v6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
