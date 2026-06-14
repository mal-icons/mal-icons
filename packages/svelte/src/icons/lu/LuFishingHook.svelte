<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m17.59 11.41-5.93 5.93a1 1 0 0 1-8-8l3.14-3.14a0.710.71 0 0 1 1.210.5V10"}],["path",{"d":"M20.41 8.59 22 7"}],["circle",{"cx":"19","cy":"10","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
