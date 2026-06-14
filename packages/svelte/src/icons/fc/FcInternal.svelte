<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"fill":"#B3E5FC","cx":"24","cy":"30","r":"15"}],["polygon",{"fill":"#1565C0","points":"24,38.7 15,28 33,28"}],["rect",{"fill":"#1565C0","x":"21","y":"5","width":"6","height":"26"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
