<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5a0.50.5 0 0 1 0 1H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a0.50.5 0 0 1-1 0V4a1 1 0 0 0-1-1z"}],["path",{"d":"M3.15 5.15a0.50.5 0 0 1 0.71 0L5.18 6.47a0.750.75 0 0 1 0 1.06L3.85 8.85a0.50.5 0 1 1-0.71-0.71L4.29 7 3.15 5.85a0.50.5 0 0 1 0-0.71M5.5 9a0.50.5 0 0 1 0.5-0.5h2a0.50.5 0 0 1 0 1H6a0.50.5 0 0 1-0.5-0.5M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a0.50.5 0 0 0-0.50.5v1h-1a0.50.5 0 0 0 0 1h1v1a0.50.5 0 0 0 1 0v-1h1a0.50.5 0 0 0 0-1h-1v-1a0.50.5 0 0 0-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
