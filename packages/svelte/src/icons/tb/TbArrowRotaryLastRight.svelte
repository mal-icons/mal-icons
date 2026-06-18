<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M9 15v6"}],["path",{"d":"M11.5 9.5l6.5 -6.5"}],["path",{"d":"M13 3h5v5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
