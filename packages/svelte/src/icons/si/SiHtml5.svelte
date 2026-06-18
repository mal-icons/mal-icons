<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.5 0h21l-1.91 21.56L11.98 24l-8.56-2.44L1.5 0zm7.03 9.75l-0.23-2.72 10.0600.23-2.62L5.41 4.41l0.7 8.01h9.13l-0.33 3.43-2.910.8-2.95-0.81-0.19-2.11H6.25l0.33 4.17L12 19.35l5.38-1.440.74-8.16H8.53z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
