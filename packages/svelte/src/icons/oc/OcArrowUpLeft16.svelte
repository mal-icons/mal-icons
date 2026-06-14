<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.96 4.75A0.750.75 0 0 1 4.71 4h6.01a0.750.75 0 0 1 0 1.5h-4.2l5.26 5.26a0.750.75 0 0 1-1.06 1.06l-5.26-5.26v4.2a0.750.75 0 0 1-1.5 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
