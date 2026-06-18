<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.7 12.07l11.31 -7.07l-7.07 11.31l-4.24 -4.24"}],["path",{"d":"M8.74 14.48l-2.12 2.12c-1.89 1.89 0.94 4.72 2.83 2.83"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
