<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 5h6c0.55 0 1-0.45 1-1s-0.45-1-1-1H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h6c0.55 0 1-0.45 1-1s-0.45-1-1-1H5V5z"}],["path",{"d":"m20.65 11.65-2.79-2.79a0.50.5 0 0 0-0.860.35V11h-7c-0.55 0-1 0.45-1 1s0.45 1 1 1h7v1.79c0 0.450.540.670.850.35l2.79-2.79c0.2-0.190.2-0.510.01-0.7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
