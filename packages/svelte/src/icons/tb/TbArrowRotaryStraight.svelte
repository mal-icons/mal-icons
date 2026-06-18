<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 13a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M13 16v5"}],["path",{"d":"M13 3v7"}],["path",{"d":"M9 7l4 -4l4 4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
