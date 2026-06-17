<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m4.79-6.91A0.50.5 0 0 0 4 5.5v5a0.50.5 0 0 0 0.790.41L7.5 8.97V10.5a0.50.5 0 0 0 0.790.41L11 8.97V10.5a0.50.5 0 0 0 1 0v-5a0.50.5 0 0 0-1 0v1.53L8.29 5.09a0.50.5 0 0 0-0.790.41v1.53z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
