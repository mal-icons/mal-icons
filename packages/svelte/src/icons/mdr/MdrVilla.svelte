<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 21H4c-0.55 0-1-0.45-1-1V8.69c0-0.420.25-0.790.64-0.94l11-4.23a1 1 0 0 1 1.360.94V10H8c-0.55 0-1 0.45-1 1v10zm10-9h-7c-0.55 0-1 0.45-1 1v7c0 0.550.45 1 1 1h4v-4c0-0.550.45-1 1-1s1 0.45 1 1v4h4c0.55 0 1-0.45 1-1v-8c0-1.1-0.9-2-2-2s-2 0.9-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
