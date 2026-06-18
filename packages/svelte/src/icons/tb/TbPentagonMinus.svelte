<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.5 21q -1.82 0 -5.46 0.01a1.98 1.98 0 0 1 -1.88 -1.37l-3.06 -9.43a1.98 1.98 0 0 1 0.72 -2.21l8.02 -5.83a1.98 1.98 0 0 1 2.33 0l8.02 5.83c0.69 0.5 0.98 1.4 0.72 2.21l-1.56 4.79"}],["path",{"d":"M16 19h6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
