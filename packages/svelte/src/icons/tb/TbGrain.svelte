<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M13.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M13.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M18.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
