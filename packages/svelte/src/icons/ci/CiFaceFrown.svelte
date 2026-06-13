<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"data-name":"Face Frown"}],["path",{"d":"M12,21.94A9.94,9.94,0,1,1,21.94,12,9.95,9.95,0,0,1,12,21.94ZM12,3.06A8.94,8.94,0,1,0,20.94,12,8.95,8.95,0,0,0,12,3.06Z"}],["path",{"d":"M17.21,16.48a6.03,6.03,0,0,0-10.41,0,0.50.5,0,0,0,0.860.5,5.03,5.03,0,0,1,8.69,0,0.50.5,0,0,0,0.86-0.5Z"}],["circle",{"cx":"9","cy":"9.01","r":"1.25"}],["circle",{"cx":"15","cy":"9.01","r":"1.25"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
