<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 21l14 -9"}],["path",{"d":"M16 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M17 3l3.62 7.29a4.01 4.01 0 0 1 -0.76 4.51a4 4 0 0 1 -6.49 -4.46l3.64 -7.34"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
