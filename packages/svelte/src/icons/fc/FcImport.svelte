<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"#F8BBD0","d":"M7,40V8c0-2.2,1.8-4,4-4h24c2.2,0,4,1.8,4,4v32c0,2.2-1.8,4-4,4H11C8.8,44,7,42.2,7,40z"}],["polygon",{"fill":"#E91E63","points":"13.3,24 24,15 24,33"}],["rect",{"fill":"#E91E63","x":"19","y":"21","width":"23","height":"6"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
