<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"fill":"#3F51B5","points":"4,24 18,12.3 18,35.7"}],["rect",{"fill":"#3F51B5","x":"15","y":"20","width":"27","height":"8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
