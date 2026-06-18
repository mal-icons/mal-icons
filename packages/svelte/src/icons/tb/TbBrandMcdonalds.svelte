<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 20c0 -3.95 -0.97 -16 -4.04 -16s-3.96 9.09 -3.96 14.76c0 -5.67 -0.9 -14.76 -3.96 -14.76c-3.06 0 -4.04 12.05 -4.04 16"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
