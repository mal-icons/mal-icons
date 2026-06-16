<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 10.5V7c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v10c0 0.550.45 1 1 1h12c0.55 0 1-0.45 1-1v-3.5l2.29 2.29c0.630.63 1.710.18 1.71-0.71V8.91c0-0.89-1.08-1.34-1.71-0.71L17 10.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
