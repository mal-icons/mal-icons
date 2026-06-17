<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.85 3.65a0.50.5 0 0 1 0 0.71l-7 7a0.50.5 0 0 1-0.71 0l-3.5-3.5a0.50.5 0 1 1 0.71-0.71L6.5 10.29l6.65-6.65a0.50.5 0 0 1 0.71 0"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
