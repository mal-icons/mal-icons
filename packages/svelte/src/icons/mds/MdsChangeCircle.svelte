<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0.06 17v-2.01H12c-1.28 0-2.56-0.49-3.54-1.46a5.01 5.01 0 0 1-0.64-6.29l1.1 1.1c-0.71 1.33-0.53 3.010.59 4.130.70.7 1.62 1.03 2.54 1.01v-2.14l2.83 2.83L12.06 19zm4.11-4.24-1.1-1.1c0.71-1.330.53-3.01-0.59-4.13A3.48 3.48 0 0 0 12 8.5h-0.06v2.15L9.11 7.83 11.94 5v2.02c1.3-0.02 2.610.45 3.6 1.45 1.7 1.7 1.91 4.350.63 6.29z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
