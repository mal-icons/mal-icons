<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m15.23 16.85-0.92-0.38"}],["path",{"d":"m15.23 19.15-0.920.38"}],["path",{"d":"M16 2v4"}],["path",{"d":"m16.47 14.310.380.92"}],["path",{"d":"m16.85 20.77-0.380.92"}],["path",{"d":"m19.15 15.230.38-0.92"}],["path",{"d":"m19.53 21.7-0.38-0.92"}],["path",{"d":"m20.77 16.850.92-0.38"}],["path",{"d":"m20.77 19.150.920.38"}],["path",{"d":"M21 10.59V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{"d":"M3 10h18"}],["path",{"d":"M8 2v4"}],["circle",{"cx":"18","cy":"18","r":"3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
