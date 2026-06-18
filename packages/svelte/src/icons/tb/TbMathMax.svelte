<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M3 15s0.62 -5.54 2.33 -7.93"}],["path",{"d":"M8.64 7.11c2.72 3.31 5.88 12.89 8.36 12.89c2 0 3.33 -3 4 -9"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
