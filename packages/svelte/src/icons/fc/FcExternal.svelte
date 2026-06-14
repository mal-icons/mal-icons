<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"fill":"#B2DFDB","cx":"24","cy":"31","r":"14"}],["polygon",{"fill":"#009688","points":"24,3.3 33,14 15,14"}],["rect",{"fill":"#009688","x":"21","y":"11","width":"6","height":"23"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
