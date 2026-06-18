<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 3h5v5"}],["path",{"d":"M8 3h-5v5"}],["path",{"d":"M21 3l-7.54 7.54a5 5 0 0 0 -1.46 3.53v6.93"}],["path",{"d":"M3 3l7.54 7.54a5 5 0 0 1 1.46 3.53v0.93"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
