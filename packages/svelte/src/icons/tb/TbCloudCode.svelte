<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 18h-4.34c-2.57 0 -4.66 -2.01 -4.66 -4.49c0 -2.47 2.09 -4.48 4.66 -4.48c0.39 -1.76 1.79 -3.2 3.68 -3.77c1.88 -0.57 3.96 -0.19 5.44 1c1.49 1.19 2.16 3.01 1.77 4.77h0.99a3.47 3.47 0 0 1 3.31 2.44"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
