<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 16v-8m4 0v8"}],["path",{"d":"M10 12h4"}],["path",{"d":"M7.5 4.21v0.01"}],["path",{"d":"M4.21 7.5v0.01"}],["path",{"d":"M3 12v0.01"}],["path",{"d":"M4.21 16.5v0.01"}],["path",{"d":"M7.5 19.79v0.01"}],["path",{"d":"M12 21v0.01"}],["path",{"d":"M16.5 19.79v0.01"}],["path",{"d":"M19.79 16.5v0.01"}],["path",{"d":"M21 12v0.01"}],["path",{"d":"M19.79 7.5v0.01"}],["path",{"d":"M16.5 4.21v0.01"}],["path",{"d":"M12 3v0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
