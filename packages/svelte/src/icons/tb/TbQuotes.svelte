<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 12c-1.33 -1.85 -1.33 -4.15 0 -6"}],["path",{"d":"M8 12c-1.33 -1.85 -1.33 -4.15 0 -6"}],["path",{"d":"M16 18c1.33 -1.85 1.33 -4.15 0 -6"}],["path",{"d":"M20 18c1.33 -1.85 1.33 -4.15 0 -6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
