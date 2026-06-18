<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-0.5 0 -1 0.5 -1 1l-2 14c0 0.5 0.5 1 1 1h2.8l1.2 -5c0.1 -0.6 0.4 -1 1 -1m7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-0.6 3.6a1 1 0 0 1 -1 0.8l-2.7 0a0.5 0.5 0 0 1 -0.5 -0.6l0.2 -1.4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
