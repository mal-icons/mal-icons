<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 21l3 -11c2.36 0 3 0 3 1c0 0 1.18 -1.74 2 -3c-3.08 -1.46 -6 -1 -6 -1l-2 2l-2 -2s-2.92 -0.46 -6 1c0.82 1.25 2 3 2 3c0 -1 0.74 -1 3 -1l3 11"}],["path",{"d":"M20 5c-5.11 -2 -10.89 -2 -16 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
