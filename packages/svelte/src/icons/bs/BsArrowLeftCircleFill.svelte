<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a0.50.5 0 0 1 0 1H5.71l2.15 2.15a0.50.5 0 0 1-0.710.71l-3-3a0.50.5 0 0 1 0-0.71l3-3a0.50.5 0 1 1 0.710.71L5.71 7.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
