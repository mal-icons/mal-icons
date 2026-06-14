<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.25 4a0.750.75 0 0 1 0.750.75V11h10V4.75a0.750.75 0 0 1 1.5 0v14.5a0.750.75 0 0 1-1.5 0V12.5H7v6.75a0.750.75 0 0 1-1.5 0V4.75A0.750.75 0 0 1 6.25 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
