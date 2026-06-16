<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 8v8h-3V8h3m0-3h-3C8.34 5 7 6.34 7 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zM2.5 8H3v9.5c0 0.830.67 1.5 1.5 1.5S6 18.33 6 17.5V7c0-1.1-0.9-2-2-2H2.5C1.67 5 1 5.67 1 6.5S1.67 8 2.5 8zm16 3c-0.83 0-1.50.68-1.5 1.5v2c0 0.820.67 1.5 1.5 1.5H21v1h-3c-0.55 0-1 0.45-1 1s0.45 1 1 1h3.5c0.83 0 1.5-0.67 1.5-1.5v-2c0-0.83-0.67-1.5-1.5-1.5H19v-1h3c0.55 0 1-0.45 1-1s-0.45-1-1-1h-3.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
