<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.9 12.85l0.98 0.21c-0.5 2.32-2.51 3.94-4.88 3.94-2.76 0-5-2.24-5-5 0-2.27 1.53-4.26 3.73-4.84l0.25 0.97c-1.75 0.46-2.98 2.05-2.98 3.87 0 2.21 1.79 4 4 4 1.89 0 3.5-1.29 3.9-3.15zM16 15.12v1h-1.87l-0.95-4.12h-6.16l-0.54-8.08c-0.85-0.23-1.47-1-1.47-1.92 0-1.1 0.9-2 2-2s2 0.9 2 2c0 0.94-0.65 1.72-1.52 1.94l0.27 4.01 3.63-0.9 0.24 0.97-3.8 0.94 0.14 2.04h6.02l0.96 4.12h1.07zM7 3c0.55 0 1-0.45 1-1s-0.45-1-1-1-1 0.45-1 1 0.45 1 1 1z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
