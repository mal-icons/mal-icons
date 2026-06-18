<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4v0.01"}],["path",{"d":"M20 20v0.01"}],["path",{"d":"M20 16v0.01"}],["path",{"d":"M20 12v0.01"}],["path",{"d":"M20 8v0.01"}],["path",{"d":"M8 5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1l0 -14"}],["path",{"d":"M4 4v0.01"}],["path",{"d":"M4 20v0.01"}],["path",{"d":"M4 16v0.01"}],["path",{"d":"M4 12v0.01"}],["path",{"d":"M4 8v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
