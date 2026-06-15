<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 7.5c0 3.03-2.47 5.5-5.5 5.5h-2.91l2.65 2.65-0.71 0.71-3.85-3.85 3.85-3.85 0.71 0.71-2.65 2.65h2.91c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5h-7.08v-1h7.08c3.03 0 5.5 2.47 5.5 5.5z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
