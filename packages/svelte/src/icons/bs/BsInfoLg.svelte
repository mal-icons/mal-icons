<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m9.71 6.08-3.020.38-0.110.50.60.11c0.390.090.460.230.380.62l-0.97 4.58c-0.25 1.180.14 1.74 1.07 1.740.72 0 1.55-0.33 1.93-0.79l0.12-0.55c-0.260.23-0.650.33-0.90.33-0.36 0-0.49-0.25-0.4-0.7zm0.09-2.75a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
