<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.85 4.85a0.50.5 0 1 0-0.71-0.71l-3.5 3.5a0.50.5 0 0 0 0 0.71l3.5 3.5a0.50.5 0 0 0 0.71-0.71L2.71 8zm4.29 0a0.50.5 0 0 1 0.71-0.71l3.5 3.5a0.50.5 0 0 1 0 0.71l-3.5 3.5a0.50.5 0 0 1-0.71-0.71L13.29 8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
