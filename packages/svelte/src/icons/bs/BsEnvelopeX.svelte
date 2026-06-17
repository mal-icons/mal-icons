<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a0.50.5 0 0 0 0-1H2a1 1 0 0 1-0.97-0.74l5.64-3.47L8 9.58l7-4.2V8.5a0.50.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.71 6.21L1 11.11V5.38zM1 4.22V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v0.22l-7 4.2z"}],["path",{"d":"M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-4.85-1.35a0.50.5 0 0 0 0 0.71l0.650.65-0.650.65a0.50.5 0 0 0 0.710.71l0.65-0.650.650.65a0.50.5 0 0 0 0.71-0.71l-0.65-0.650.65-0.65a0.50.5 0 0 0-0.71-0.71l-0.650.65-0.65-0.65a0.50.5 0 0 0-0.71 0"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
