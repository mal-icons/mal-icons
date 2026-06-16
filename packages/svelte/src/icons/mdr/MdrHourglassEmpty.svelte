<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 2c-1.1 0-2 0.9-2 2v3.17c0 0.530.21 1.040.59 1.42L10 12l-3.42 3.42c-0.370.38-0.580.89-0.58 1.42V20c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2v-3.16c0-0.53-0.21-1.04-0.58-1.41L14 12l3.41-3.4c0.38-0.380.59-0.890.59-1.42V4c0-1.1-0.9-2-2-2H8zm8 14.5V19c0 0.55-0.45 1-1 1H9c-0.55 0-1-0.45-1-1v-2.5l4-4 4 4zm-4-5-4-4V5c0-0.550.45-1 1-1h6c0.55 0 1 0.45 1 1v2.5l-4 4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
