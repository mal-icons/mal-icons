<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 6h-6V4c0-1.1-0.9-2-2-2h-4c-1.1 0-2 0.9-2 2v2H2v15h20V6zm-8 0h-4V4h4v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
