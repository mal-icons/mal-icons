<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 6c2.33 5.14 6.61 6.86 9.33 12"}],["path",{"d":"M13.67 14c2.51 -1.5 2.67 -4.14 2.67 -5.33c0 -1.78 -0.44 -2.67 -0.44 -2.67"}],["path",{"d":"M7.49 18s-0.48 -0.9 -0.48 -2.71c0 -1.17 0.16 -3.72 2.64 -5.27"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
