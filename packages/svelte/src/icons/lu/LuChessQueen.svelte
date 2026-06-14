<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"}],["path",{"d":"m12.47 5.94 1.57 5.34a1 1 0 0 0 1.750.33l2.62-3.4"}],["path",{"d":"m20 9-3 9"}],["path",{"d":"m5.59 8.21 2.62 3.4a1 1 0 0 0 1.75-0.33l1.57-5.34"}],["path",{"d":"M7 18 4 9"}],["circle",{"cx":"12","cy":"4","r":"2"}],["circle",{"cx":"20","cy":"7","r":"2"}],["circle",{"cx":"4","cy":"7","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
