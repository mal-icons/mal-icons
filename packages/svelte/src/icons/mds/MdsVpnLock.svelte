<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 13c0 2.08-0.8 3.97-2.1 5.39V17H14v-4H7v-2h3V8h4V3.46c-0.95-0.3-1.95-0.46-3-0.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-0.34-0.02-0.67-0.05-1h-2.03c0.040.330.080.660.08 1zm-9 7.93c-3.95-0.49-7-3.85-7-7.93 0-0.620.08-1.210.21-1.79L8 16v3h2v1.93zM22 4v-0.36c0-1.31-0.94-2.5-2.24-2.63A2.5 2.5 0 0 0 17 3.5V4h-1v6h7V4h-1zm-1 0h-3v-0.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5V4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
