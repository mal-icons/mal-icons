<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 14c-0.090.06-2 2.08-2 3.5 0 1.490.95 2.45 2 2.50.910.04 2-0.89 2-2.5 0-1.5-1.91-3.44-2-3.5zM9.59 20c0.380.380.880.59 1.410.59s1.04-0.21 1.41-0.59l7-7-0.71-0.71L11 4.59 8.71 2.29 7.29 3.71 9.59 6 4 11.59c-0.380.38-0.590.88-0.59 1.41s0.21 1.040.59 1.41L9.59 20zM11 7.41 16.59 13H5.41L11 7.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
