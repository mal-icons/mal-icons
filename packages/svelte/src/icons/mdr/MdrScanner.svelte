<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.8 10.7 5.15 5.35c-0.52-0.19-1.10.08-1.30.6-0.190.530.08 1.110.6 1.3L17.6 12H5c-1.1 0-2 0.9-2 2v4c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-5.5c0-0.8-0.5-1.6-1.2-1.8zM7 17H5v-2h2v2zm11 0h-8c-0.55 0-1-0.45-1-1s0.45-1 1-1h8c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
