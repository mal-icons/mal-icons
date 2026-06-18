<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.35 4.8 16.33 0H0.12L3.14 4.8h16.21zM0.12 24h16.21l3.03-4.8H3.14L0.12 24zM6.16 9.6h16.21l1.51 2.4-1.51 2.4H6.16L7.68 12 6.16 9.6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
