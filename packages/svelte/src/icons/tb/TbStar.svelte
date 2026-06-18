<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 17.75l-6.17 3.25l1.18 -6.87l-5 -4.87l6.9 -1l3.09 -6.25l3.09 6.25l6.9 1l-5 4.87l1.18 6.87l-6.16 -3.24"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
