<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 7h1.95c1.91 0 3.71 0.93 4.8 2.5a5.86 5.86 0 0 0 4.8 2.5h6.45"}],["path",{"d":"M3 17h1.95a5.85 5.85 0 0 0 4.8 -2.5a5.85 5.85 0 0 1 4.8 -2.5h5.45"}],["path",{"d":"M18 15l3 -3l-3 -3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
