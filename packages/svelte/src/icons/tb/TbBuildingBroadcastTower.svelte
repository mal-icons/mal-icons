<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M16.62 13.92a5 5 0 1 0 -9.23 0"}],["path",{"d":"M20.31 15.47a9 9 0 1 0 -16.61 0"}],["path",{"d":"M9 21l3 -9l3 9"}],["path",{"d":"M10 19h4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
