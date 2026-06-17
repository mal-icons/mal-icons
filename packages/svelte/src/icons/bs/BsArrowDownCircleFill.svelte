<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a0.50.5 0 0 0-1 0v5.79L5.35 8.15a0.50.5 0 1 0-0.710.71l3 3a0.50.5 0 0 0 0.71 0l3-3a0.50.5 0 0 0-0.71-0.71L8.5 10.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
