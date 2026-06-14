<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"fill":"#3F51B5","points":"24,4 35.7,18 12.3,18"}],["rect",{"fill":"#3F51B5","x":"20","y":"15","width":"8","height":"27"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
