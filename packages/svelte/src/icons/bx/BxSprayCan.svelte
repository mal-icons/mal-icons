<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 2h-4a1 1 0 0 0-1 1v3.81a6 6 0 0 0-3 5.19v0.99L3 13l00.07V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a6 6 0 0 0-3-5.19V3a1 1 0 0 0-1-1zm-3 4V4h2v2h-2zm5 14h-8v-6h8v6zm-8-8c0-2.21 1.79-4 4-4s4 1.79 4 4h-8zm8-9h2v2h-2zM16 3h2v2h-2zm0 3h2v2h-2zm3-3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
