<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.5 0A2.5 2.5 0 0 0 1 2.5v9c0 0.820.39 1.54 1 2v2a0.50.5 0 0 0 0.50.5h2a0.50.5 0 0 0 0.5-0.5V14h6v1.5a0.50.5 0 0 0 0.50.5h2a0.50.5 0 0 0 0.5-0.5v-2c0.61-0.46 1-1.18 1-2v-9A2.5 2.5 0 0 0 12.5 0zM3 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.9c0 0.63-0.56 1.09-1.170.99C10.93 7.75 9.21 7.5 8 7.5s-2.920.25-3.830.39A1.01 1.01 0 0 1 3 6.9zm1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2m-5-2h2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
