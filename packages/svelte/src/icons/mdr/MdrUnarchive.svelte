<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m20.55 5.22-1.39-1.68A1.51 1.51 0 0 0 18 3H6c-0.47 0-0.880.21-1.150.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19a2 2 0 0 0 2 2h14c1.1 0 2-0.9 2-2V6.5c0-0.49-0.17-0.93-0.45-1.28zm-8.2 4.63L17.5 15H14v2h-4v-2H6.5l5.15-5.15c0.19-0.190.51-0.190.7 0zM5.12 5l0.82-1h12l0.93 1H5.12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
