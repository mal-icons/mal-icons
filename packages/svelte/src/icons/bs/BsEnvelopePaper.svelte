<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 0a2 2 0 0 0-2 2v1.13l-0.940.5A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.06-1.76L14 3.13V2a2 2 0 0 0-2-2zm10 4.270.470.25A1 1 0 0 1 15 5.4v0.82l-1 0.6zm-1 3.15-3.75 2.25L8 8.92l-1.250.75L3 7.42V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-0.6-1-0.6V5.4a1 1 0 0 1 0.53-0.88L2 4.27zm13 0.57v5.73l-4.78-2.87zm-0.04 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-0.96-0.74L8 10.08zM1 13.12V7.38l4.78 2.87L1 13.12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
