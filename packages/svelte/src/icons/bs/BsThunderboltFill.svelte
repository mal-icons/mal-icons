<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 3a1 1 0 0 0-1 1v7.29A1 1 0 0 0 0.29 12L2 13.71a1 1 0 0 0 0.710.29h10.59a1 1 0 0 0 0.71-0.29L15.71 12a1 1 0 0 0 0.29-0.71V4a1 1 0 0 0-1-1zm2.5 3h9a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-0.50.5h-9a0.50.5 0 0 1-0.5-0.5v-1a0.50.5 0 0 1 0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
