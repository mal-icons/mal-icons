<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 10c0 5.52 -4.48 10 -10 10a9.97 9.97 0 0 1 -6.98 -2.84l4.34 -4.15a4 4 0 0 0 5.76 -5.51l4.34 -4.15a9.96 9.96 0 0 1 2.54 6.66"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
