<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 14c0 1.30.84 2.4 2 2.82V20H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h4c0.55 0 1-0.45 1-1s-0.45-1-1-1H7v-3.18C8.16 16.4 9 15.3 9 14V7c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1v7zm2-6h2v3H5V8zm15.640.54-0.96-0.32a1 1 0 0 1-0.68-0.95V3c0-0.55-0.45-1-1-1h-3c-0.55 0-1 0.45-1 1v4.28a1 1 0 0 1-0.680.95l-0.960.32c-0.810.28-1.36 1.04-1.36 1.9V20c0 1.10.9 2 2 2h7c1.1 0 2-0.9 2-2v-9.56c0-0.86-0.55-1.62-1.36-1.9zM16 4h1v1h-1V4zm-3 6.440.95-0.32C15.18 9.72 16 8.57 16 7.28V7h1v0.28a3 3 0 0 0 2.05 2.85l0.950.31V12h-7v-1.56zM20 20h-7v-2h7v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
