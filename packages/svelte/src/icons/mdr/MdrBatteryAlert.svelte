<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.67 4H14V3c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c0.74 0 1.34-0.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-5c0 0.55-0.45 1-1 1s-1-0.45-1-1v-3c0-0.550.45-1 1-1s1 0.45 1 1v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
