<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.5 20h-7.5a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v2"}],["path",{"d":"M14.93 12.37a3 3 0 1 0 -2.93 3.63"}],["path",{"d":"M21.12 20.12a3 3 0 1 0 -4.24 0c0.42 0.42 1.13 1.05 2.12 1.88c1.05 -0.89 1.76 -1.52 2.12 -1.88"}],["path",{"d":"M19 18v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
