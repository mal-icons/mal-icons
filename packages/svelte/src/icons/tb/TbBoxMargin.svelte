<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 8h8v8h-8l0 -8"}],["path",{"d":"M4 4v0.01"}],["path",{"d":"M8 4v0.01"}],["path",{"d":"M12 4v0.01"}],["path",{"d":"M16 4v0.01"}],["path",{"d":"M20 4v0.01"}],["path",{"d":"M4 20v0.01"}],["path",{"d":"M8 20v0.01"}],["path",{"d":"M12 20v0.01"}],["path",{"d":"M16 20v0.01"}],["path",{"d":"M20 20v0.01"}],["path",{"d":"M20 16v0.01"}],["path",{"d":"M20 12v0.01"}],["path",{"d":"M20 8v0.01"}],["path",{"d":"M4 16v0.01"}],["path",{"d":"M4 12v0.01"}],["path",{"d":"M4 8v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
