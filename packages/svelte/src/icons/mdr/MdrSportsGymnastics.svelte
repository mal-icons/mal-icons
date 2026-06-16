<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm9 16c-0.56 0-1.02-0.44-1.05-1l-0.45-9L8 11H2c-0.55 0-1-0.45-1-1s0.45-1 1-1h5l6.26-4.47c0.42-0.3 1-0.23 1.340.160.380.450.3 1.12-0.18 1.46L11.14 8.5H14l7.09-4.09a0.980.98 0 0 1 1.1 1.62L14.5 12l-0.45 9c-0.030.56-0.49 1-1.05 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
