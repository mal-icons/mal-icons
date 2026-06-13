<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"data-name":"Face Meh"}],["path",{"d":"M12,21.94A9.94,9.94,0,1,1,21.94,12,9.95,9.95,0,0,1,12,21.94ZM12,3.06A8.94,8.94,0,1,0,20.94,12,8.95,8.95,0,0,0,12,3.06Z"}],["circle",{"cx":"9","cy":"8.99","r":"1.25"}],["circle",{"cx":"15","cy":"8.99","r":"1.25"}],["path",{"d":"M8.44,15.94h7.13a0.50.5,0,0,0,0-1H8.44a0.50.5,0,0,0,0,1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
