<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M4 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
