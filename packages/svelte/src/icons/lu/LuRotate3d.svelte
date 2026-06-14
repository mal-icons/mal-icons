<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m15.19 13.71 3.81 1.86-1.86 3.81"}],["path",{"d":"M16.47 7.53 A 5 10 0 1 0 13 21.8"}],["path",{"d":"M21.8 11 A 10 5 0 1 0 19 15.57"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
