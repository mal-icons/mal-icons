<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.15 8.35a0.50.5 0 0 1 0-0.71l2-2a0.50.5 0 1 1 0.710.71L2.71 7.5h10.59l-1.15-1.15a0.50.5 0 0 1 0.71-0.71l2 2a0.50.5 0 0 1 0 0.71l-2 2a0.50.5 0 0 1-0.71-0.71L13.29 8.5H2.71l1.15 1.15a0.50.5 0 0 1-0.710.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
