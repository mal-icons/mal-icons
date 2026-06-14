<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"fill":"#4CAF50","cx":"24","cy":"24","r":"21"}],["rect",{"fill":"#fff","x":"21","y":"14","width":"6","height":"20"}],["rect",{"fill":"#fff","x":"14","y":"21","width":"20","height":"6"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
