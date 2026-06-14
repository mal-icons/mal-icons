<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.09 20.91c-0.35 0-1.22-0.15-1.67-1.5l-1.21-3.63-3.63-1.21c-1.24-0.41-1.47-1.17-1.49-1.59s0.11-1.19 1.3-1.75l11.38-5.31c1.03-0.48 1.92-0.31 2.350.360.220.350.40.97-0.05 1.93l-5.31 11.38c-0.53 1.14-1.27 1.31-1.66 1.31zm-5.39-8.07l4.09 1.36 1.37 4.09 4.78-10.23-10.23 4.78z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
