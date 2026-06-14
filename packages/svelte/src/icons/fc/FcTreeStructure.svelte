<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"fill":"#90CAF9","points":"36.9,13.8 35.1,10.2 7.5,24 35.1,37.8 36.9,34.2 16.5,24"}],["rect",{"x":"6","y":"18","fill":"#D81B60","width":"12","height":"12"}],["rect",{"fill":"#2196F3","x":"30","y":"6","width":"12","height":"12"}],["rect",{"fill":"#2196F3","x":"30","y":"30","width":"12","height":"12"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
