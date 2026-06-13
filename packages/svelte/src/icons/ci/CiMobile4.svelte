<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"data-name":"Mobile 4"}],["circle",{"cx":"12","cy":"18.94","r":"1"}],["path",{"d":"M16.73,2.07H7.28a2.39,2.39,0,0,0-2.24,2.5v14.87a2.39,2.39,0,0,0,2.24,2.5h9.45a2.38,2.38,0,0,0,2.24-2.5V4.57A2.38,2.38,0,0,0,16.73,2.07Zm1.24,17.37a1.38,1.38,0,0,1-1.24,1.5H7.28a1.39,1.39,0,0,1-1.24-1.5v-2.5h11.93Zm0-3.5H6.04V4.57a1.39,1.39,0,0,1,1.24-1.5h9.45a1.38,1.38,0,0,1,1.24,1.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
