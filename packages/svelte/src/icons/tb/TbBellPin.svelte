<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 17h-8a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6"}],["path",{"d":"M9 17v1a3 3 0 0 0 3.64 2.93"}],["path",{"d":"M21.12 20.12a3 3 0 1 0 -4.24 0c0.42 0.42 1.13 1.05 2.12 1.88c1.05 -0.89 1.76 -1.52 2.12 -1.88"}],["path",{"d":"M19 18v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
