<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.37 1.01a0.750.75 0 0 1 0.620.86L6.57 4.5h3.98l0.46-2.87a0.750.75 0 0 1 1.480.24L12.07 4.5h2.18a0.750.75 0 0 1 0 1.5h-2.42l-0.64 4h2.56a0.750.75 0 0 1 0 1.5h-2.8l-0.46 2.87a0.750.75 0 0 1-1.48-0.24l0.42-2.63H5.45l-0.46 2.87a0.750.75 0 0 1-1.48-0.24l0.42-2.63H1.75a0.750.75 0 0 1 0-1.5h2.42l0.64-4H2.25a0.750.75 0 0 1 0-1.5h2.8l0.46-2.87a0.750.75 0 0 1 0.86-0.62ZM9.67 10l0.64-4H6.33l-0.64 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
