<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.01 4.16c1.74 0 2.92-1.12 2.92-2.81 0-1.64-1.18-2.58-2.56-2.58-0.9 0-1.440.42-1.610.68h-0.06l0.19-2.34h3.62V4H5.79L5.45 8.63h1.15c0.19-0.360.67-0.81 1.44-0.810.85 0 1.580.6 1.58 1.57 0 1.09-0.78 1.68-1.57 1.68-0.7 0-1.39-0.31-1.53-1.03H5.28c0.07 1.21 1.15 2.12 2.72 2.12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
