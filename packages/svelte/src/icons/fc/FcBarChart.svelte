<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"fill":"#00BCD4","x":"19","y":"22","width":"10","height":"20"}],["rect",{"fill":"#00BCD4","x":"6","y":"12","width":"10","height":"30"}],["rect",{"fill":"#00BCD4","x":"32","y":"6","width":"10","height":"36"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
