<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 18c0 0.55-0.45 1-1 1h-4c-0.55 0-1-0.45-1-1s0.45-1 1-1h1c-0.47-4.21-3.89-7.55-8.12-7.96A0.980.98 0 0 1 2 8.05c0-0.590.52-1.06 1.11-1 3.920.39 7.26 2.82 8.89 6.25 1.13-2.43 2.99-4.25 4.78-5.52l-1.92-1.92c-0.32-0.32-0.1-0.860.35-0.86h5.29c0.28 0 0.50.220.50.5v5.29c0 0.45-0.540.67-0.850.35L18.21 9.2c-2.28 1.58-4.76 4.1-5.21 7.8h1c0.55 0 1 0.45 1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
