<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.5 16.5c-0.33-0.06-0.66-0.1-1.01-0.1-0.34 0-0.67 0.05-1.01 0.11l0.13-6.8c-1.79-3.09-3.47-6.23-5.44-9.2 0.34 0.09 0.68 0.14 1.04 0.14s0.72-0.07 1.07-0.14c1.35 2.39 2.81 4.7 4.22 7.05 1.42-2.33 2.93-4.64 4.22-7.05 0.34 0.09 0.68 0.14 1.03 0.14 0.37 0 0.74-0.05 1.1-0.13-0.77 1.06-1.4 2.21-2.07 3.34-1.14 1.95-2.27 3.91-3.39 5.87l0.13 6.8z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
