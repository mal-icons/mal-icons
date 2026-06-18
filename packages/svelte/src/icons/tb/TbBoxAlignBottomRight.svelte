<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 13h-5a1 1 0 0 0 -1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-5a1 1 0 0 0 -1 -1"}],["path",{"d":"M20 9v0.01"}],["path",{"d":"M20 4v0.01"}],["path",{"d":"M15 4v0.01"}],["path",{"d":"M9 4v0.01"}],["path",{"d":"M9 20v0.01"}],["path",{"d":"M4 4v0.01"}],["path",{"d":"M4 9v0.01"}],["path",{"d":"M4 15v0.01"}],["path",{"d":"M4 20v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
