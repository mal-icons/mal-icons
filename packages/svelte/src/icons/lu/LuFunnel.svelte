<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 20a1 1 0 0 0 0.550.9l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 0.52-1.34L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-0.74 1.67l7.23 7.99A2 2 0 0 1 10 14z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
