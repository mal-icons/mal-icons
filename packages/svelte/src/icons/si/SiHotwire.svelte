<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m16.76 6.92-3.480.81L16.32 0 7.24 11.71l4.33-0.85-4.09 7.98 2.36-0.53L7.46 24l7.51-8.11-2.770.64 4.57-9.61z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
