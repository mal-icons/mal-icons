<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.28 14.26l-4.2 -8.87a2.3 2.3 0 0 0 -4.16 0l-0.16 0.35m-1.29 2.72l-5.47 11.54h17"}],["path",{"d":"M7.5 11l2 2.5l2 -2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
