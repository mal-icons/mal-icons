<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 18c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v10a2 2 0 0 0 2 2H1c-0.55 0-1 0.45-1 1s0.45 1 1 1h22c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3zm-7-3.53v-2.19c-2.78 0-4.610.85-6 2.720.56-2.67 2.11-5.33 6-5.87V7l3.61 3.36c0.210.20.210.53 0 0.73L13 14.47z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
