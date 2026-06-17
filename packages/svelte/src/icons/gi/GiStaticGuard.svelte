<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M190.39 18.41l13.18 64.63h41.96l0 18.69h-38.15l7.64 37.44h82.63l7.45-37.44h-40.88V83.03h44.6l12.86-64.61-131.27-0.01zM331.8 63.24l-18.82 94.61h-113.23l-18.99-93.13L38.98 114.4l148.97 247.34-60.97-203.17 17.9-5.37 39.25 130.78 72.35 10.62 71.53-10.7 39.09-130.66 17.91 5.36-60.02 200.59L473.06 114.32 331.8 63.24zm-9.71 240.45l-65.58 9.81-66.45-9.75 56.59 188.58V339.48h18.69v152.85h0.31l56.44-188.63z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
