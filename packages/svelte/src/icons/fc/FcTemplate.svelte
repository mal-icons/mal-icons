<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"4","y":"7","fill":"#BBDEFB","width":"40","height":"34"}],["rect",{"x":"9","y":"12","fill":"#3F51B5","width":"30","height":"5"}],["rect",{"fill":"#2196F3","x":"9","y":"21","width":"13","height":"16"}],["rect",{"fill":"#2196F3","x":"26","y":"21","width":"13","height":"16"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
