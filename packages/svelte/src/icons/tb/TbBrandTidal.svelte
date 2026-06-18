<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.33 6l3.33 3.25l3.33 -3.25l3.33 3.25l3.33 -3.25l3.33 3.25l-3.33 3.25l-3.33 -3.25l-3.33 3.25l3.33 3.25l-3.33 3.25l-3.33 -3.25l3.33 -3.25l-3.33 -3.25l-3.33 3.25l-3.33 -3.25l3.33 -3.25"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
