<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.5 2a0.50.5 0 0 0-0.50.5v5a0.50.5 0 0 0 0.50.5h5a0.50.5 0 0 0 0.5-0.5v-5a0.50.5 0 0 0-0.5-0.5zm2.13 10.46H4.14v-0.89h1.4v-0.5H4.14v-0.85h1.49v-0.54H3.49V13h2.15zm1.320.54h0.79l1.11-3.33h-0.73l-0.74 2.62h-0.03l-0.75-2.61h-0.76z"}],["path",{"d":"M3 0a2 2 0 0 0-2 2v13H0.5a0.50.5 0 0 0 0 1h11a0.50.5 0 0 0 0-1H11v-4a1 1 0 0 1 1 1v0.5a1.5 1.5 0 0 0 3 0V4a0.50.5 0 0 0-0.15-0.35l-0.5-0.5a0.50.5 0 0 0-0.71 0l-0.50.5A0.50.5 0 0 0 13 4v3c0 0.710.38 1.10.64 1.36l0.010.01c0.250.260.360.380.360.64v3.5a0.50.5 0 1 1-1 0V12a2 2 0 0 0-2-2V2a2 2 0 0 0-2-2zm7 2v13H2V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
