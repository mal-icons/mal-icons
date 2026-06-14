<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.14 8.8a0.750.75 0 1 1 1.06 1.06L3.81 13.25H6a0.750.75 0 0 1 0 1.5H2a0.750.75 0 0 1-0.75-0.75v-4a0.750.75 0 0 1 1.5 0v2.19l3.39-3.39ZM14.75 6a0.750.75 0 0 1-1.5 0V3.81L9.86 7.2a0.750.75 0 1 1-1.06-1.06L12.19 2.75H10a0.750.75 0 0 1 0-1.5h4a0.750.75 0 0 1 0.750.75v4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
