<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 16.21v-1.89L14 8V4a2 2 0 0 0-4 0v4.11L2 14.42v1.79l8-2.81V18l-3 2v2l5-2 5 2v-2l-3-2v-4.68l8 2.9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
