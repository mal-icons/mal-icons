<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 7V3c0-0.55-0.45-1-1-1H7c-0.55 0-1 0.45-1 1v1H4c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2h8v3h-1c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1h-1v-3c0-1.1-0.9-2-2-2H4V6h2v1c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1zM8 4h10v2H8V4zm6 17h-2v-4h2v4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
