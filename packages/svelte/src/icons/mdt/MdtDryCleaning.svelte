<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 15h6v5H9z","opacity":".3"}],["path",{"d":"M19.56 11.36 13 8.44V7c0-0.55-0.45-1-1-1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1h2c0-1.84-1.66-3.3-3.56-2.95-1.180.22-2.15 1.17-2.38 2.35-0.3 1.560.6 2.94 1.94 3.42v0.63l-6.56 2.92c-0.880.38-1.44 1.25-1.44 2.2v0.01C3 14.92 4.08 16 5.42 16H7v6h10v-6h1.58c1.34 0 2.42-1.08 2.42-2.42v-0.01c0-0.95-0.56-1.82-1.44-2.21zM15 20H9v-5h6v5zm3.58-6H17v-1H7v1H5.42c-0.46 0-0.58-0.65-0.17-0.81l6.75-3 6.75 3c0.420.190.280.81-0.170.81z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
