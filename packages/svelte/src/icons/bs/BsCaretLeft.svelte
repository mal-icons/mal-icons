<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 12.8V3.2L4.52 8zm-0.660.75-5.48-4.8a1 1 0 0 1 0-1.51l5.48-4.8A1 1 0 0 1 11 3.2v9.59a1 1 0 0 1-1.660.75"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
