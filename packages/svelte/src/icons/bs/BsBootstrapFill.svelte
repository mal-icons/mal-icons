<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.38 7.13V4.66h1.78c0.97 0 1.540.46 1.54 1.24 0 0.8-0.6 1.23-1.76 1.23zm0 3.76h1.9c1.18 0 1.81-0.48 1.81-1.38 0-0.88-0.65-1.35-1.89-1.35H6.38z"}],["path",{"d":"M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.55h3.4c1.59 0 2.540.81 2.54 2.11 0 0.88-0.65 1.68-1.48 1.82v0.1c1.140.12 1.90.93 1.9 2.03 0 1.49-1.08 2.4-2.89 2.4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
