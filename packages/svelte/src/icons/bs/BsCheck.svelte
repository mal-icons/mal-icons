<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.97 4.97a0.750.75 0 0 1 1.07 1.05l-3.99 4.99a0.750.75 0 0 1-1.080.02L4.32 8.38a0.750.75 0 1 1 1.06-1.06l2.09 2.09 3.47-4.42z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
