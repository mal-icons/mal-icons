<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 2h5v4h-5l0 -4"}],["path",{"d":"M15 10h5v4h-5l0 -4"}],["path",{"d":"M5 18h5v4h-5l0 -4"}],["path",{"d":"M5 10h5v4h-5l0 -4"}],["path",{"d":"M10 12h5"}],["path",{"d":"M7.5 6v4"}],["path",{"d":"M7.5 14v4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
