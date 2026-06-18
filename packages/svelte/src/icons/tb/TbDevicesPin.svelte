<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 14v-5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v2"}],["path",{"d":"M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8"}],["path",{"d":"M21.12 20.12a3 3 0 1 0 -4.24 0c0.42 0.42 1.13 1.05 2.12 1.88c1.05 -0.89 1.76 -1.52 2.12 -1.88"}],["path",{"d":"M19 18v0.01"}],["path",{"d":"M16 9h2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
