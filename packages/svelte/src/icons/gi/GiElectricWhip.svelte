<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M17.48 39.26c49.14 2.76 98.44 7.82 147.96 15.92l-6.19-37.09L298.61 124.75l8.18-41.98L421.17 255.67l32.39-29.33-4.66 171.83 45.94 6.66-128.06 62.76 28.44 25.59-234.39-2.7c405.34-23.83 225.85-392.45-143.33-451.22z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
