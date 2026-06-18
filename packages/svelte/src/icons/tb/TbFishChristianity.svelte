<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 7s-5.65 10 -12.31 10c-3.23 0.03 -6.19 -1.9 -7.69 -5c1.5 -3.09 4.47 -5.03 7.69 -5c6.66 0 12.31 10 12.31 10"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
