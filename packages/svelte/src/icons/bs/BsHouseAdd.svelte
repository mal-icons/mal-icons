<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.71 1.5a1 1 0 0 0-1.41 0L0.65 8.15a0.50.5 0 0 0 0.710.71L2 8.21V13.5A1.5 1.5 0 0 0 3.5 15h4a0.50.5 0 1 0 0-1h-4a0.50.5 0 0 1-0.5-0.5V7.21l5-5 6.65 6.65a0.50.5 0 0 0 0.71-0.71L13 5.79V2.5a0.50.5 0 0 0-0.5-0.5h-1a0.50.5 0 0 0-0.50.5v1.29z"}],["path",{"d":"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a0.50.5 0 0 0-0.50.5v1h-1a0.50.5 0 0 0 0 1h1v1a0.50.5 0 1 0 1 0v-1h1a0.50.5 0 1 0 0-1h-1v-1a0.50.5 0 0 0-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
