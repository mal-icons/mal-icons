<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12.99 6.74 1.93 3.44"}],["path",{"d":"M19.14 12a10 10 0 0 1-14.27 0"}],["path",{"d":"m21 21-2.16-3.84"}],["path",{"d":"m3 21 8.02-14.26"}],["circle",{"cx":"12","cy":"5","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
