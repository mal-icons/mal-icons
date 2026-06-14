<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.62 1.76a0.750.75 0 0 1 0.620.86L9.46 7.5h6.48l0.82-5.12a0.750.75 0 0 1 1.480.24L17.46 7.5h3.79a0.750.75 0 0 1 0 1.5h-4.03l-0.96 6h3.99a0.750.75 0 0 1 0 1.5h-4.23l-0.78 4.87a0.750.75 0 0 1-1.48-0.24l0.74-4.63H8.02l-0.78 4.87a0.750.75 0 0 1-1.48-0.24L6.5 16.5H2.75a0.750.75 0 0 1 0-1.5H6.74l0.96-6H3.75a0.750.75 0 0 1 0-1.5h4.19l0.82-5.12a0.750.75 0 0 1 0.86-0.62ZM14.74 15l0.96-6H9.22l-0.96 6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
