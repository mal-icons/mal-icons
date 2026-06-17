<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v0.22l3.24 1.94a2.8 2.8 0 0 0-0.23 1.03L1 5.38v5.72l3.45-2.12q0.220.420.550.84l-3.97 2.44A1 1 0 0 0 2 13h12a1 1 0 0 0 0.97-0.74l-3.97-2.44q0.33-0.420.55-0.84L15 11.11V5.38l-3 1.8a2.8 2.8 0 0 0-0.23-1.03L15 4.22V4a1 1 0 0 0-1-1zm6 2.99c1.66-1.71 5.83 1.28 0 5.13-5.82-3.85-1.66-6.84 0-5.13"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
