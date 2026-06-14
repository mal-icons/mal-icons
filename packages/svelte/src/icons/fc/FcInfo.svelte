<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"fill":"#2196F3","cx":"24","cy":"24","r":"21"}],["rect",{"x":"22","y":"22","fill":"#fff","width":"4","height":"11"}],["circle",{"fill":"#fff","cx":"24","cy":"16.5","r":"2.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
