<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.02 11.54 10 10l-2 3h9l-3.5-5z"}],["circle",{"cx":"9.5","cy":"7.5","r":"1.5"}],["path",{"d":"M19 2H6c-1.21 0-3 0.8-3 3v14c0 2.2 1.79 3 3 3h15v-2H6.01C5.55 19.99 5 19.81 5 19s0.55-0.99 1.01-1H21V4c0-1.1-0.9-2-2-2zm0 14H5V5c0-0.810.55-0.99 1-1h13v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
