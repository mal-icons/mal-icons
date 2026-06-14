<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"#4CAF50","d":"M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"}],["polygon",{"fill":"#FFEB3B","points":"24,33.4 17,25 31,25"}],["rect",{"fill":"#FFEB3B","x":"22","y":"14.8","width":"4","height":"12.3"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
