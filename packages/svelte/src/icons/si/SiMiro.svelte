<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.39 0H13.9L17 4.81 10.44 0H6.95l3.1 6.3L3.49 0H0l3.05 8.13L0 24h3.49L10.05 6.99 6.95 24h3.49L17 5.49 13.9 24h3.49L24 3.67 17.39 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
