<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 21c-0.67 -0.67 3.26 -6.24 11.79 -16.71a3.5 3.5 0 1 1 5.08 4.79c-10.57 8.61 -16.2 12.59 -16.86 11.92"}],["path",{"d":"M17.5 6.5l-1 1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
