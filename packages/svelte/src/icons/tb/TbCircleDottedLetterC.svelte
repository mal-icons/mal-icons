<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0"}],["path",{"d":"M7.5 4.21v0.01"}],["path",{"d":"M4.21 7.5v0.01"}],["path",{"d":"M3 12v0.01"}],["path",{"d":"M4.21 16.5v0.01"}],["path",{"d":"M7.5 19.79v0.01"}],["path",{"d":"M12 21v0.01"}],["path",{"d":"M16.5 19.79v0.01"}],["path",{"d":"M19.79 16.5v0.01"}],["path",{"d":"M21 12v0.01"}],["path",{"d":"M19.79 7.5v0.01"}],["path",{"d":"M16.5 4.21v0.01"}],["path",{"d":"M12 3v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
