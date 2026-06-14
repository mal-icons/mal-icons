<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.03 2.68a0.50.5 0 0 1 0.65-0.65l9 3.5a0.50.5 0 0 1-0.030.94L8.2 7.55a1 1 0 0 0-0.660.66l-1.07 3.44a0.50.5 0 0 1-0.940.03z"}],["circle",{"cx":"16","cy":"16","r":"6"}],["path",{"d":"m11.8 11.8 8.4 8.4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
