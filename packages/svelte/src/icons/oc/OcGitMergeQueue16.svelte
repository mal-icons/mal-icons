<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.75 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3 7.75a0.750.75 0 0 1 1.5 0v2.88a2.25 2.25 0 1 1-1.5 0Zm0.75 5.75a0.750.75 0 1 0 0-1.50.750.75 0 0 0 0 1.5Zm5-7.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm5.75 2.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-1.5 0a0.750.75 0 1 0-1.5 0 0.750.75 0 0 0 1.5 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
