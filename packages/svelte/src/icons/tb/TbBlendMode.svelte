<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0"}],["path",{"d":"M3 14.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
