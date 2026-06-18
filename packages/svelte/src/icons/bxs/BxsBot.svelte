<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 10.98V8a2 2 0 0 0-2-2h-6V4.69c0.31-0.270.5-0.670.5-1.11a1.5 1.5 0 0 0-3 0c0 0.440.20.840.5 1.11V6H5a2 2 0 0 0-2 2v3l-0.070.01A11 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.94a1 1 0 0 0-0.07-0.45c-0.2-0.49-0.63-0.6-0.93-0.63zM7 12c0-1.10.67-2 1.5-2s1.50.9 1.5 2-0.67 2-1.5 2S7 13.1 7 12zm9 6c-10-8 0-8 0v-2s70 8 0l0 2zm-0.5-4c-0.83 0-1.5-0.9-1.5-2s0.67-2 1.5-2 1.50.9 1.5 2-0.67 2-1.5 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
