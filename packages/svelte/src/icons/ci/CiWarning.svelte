<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.5,8.75a0.50.5,0,0,0-1,0h0v6a0.50.5,0,0,0,1,0Z"}],["circle",{"cx":"12","cy":"16.74","r":"0.5"}],["path",{"d":"M18.64,20.93H5.39A2.5,2.5,0,0,1,3.16,17.29L9.79,4.42a2.5,2.5,0,0,1,4.44,0L20.87,17.29a2.5,2.5,0,0,1-2.22,3.64ZM12.01,4.07a1.48,1.48,0,0,0-1.330.81L4.05,17.75a1.5,1.5,0,0,0,1.33,2.19H18.64a1.5,1.5,0,0,0,1.33-2.19L13.35,4.88A1.48,1.48,0,0,0,12.01,4.07Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
