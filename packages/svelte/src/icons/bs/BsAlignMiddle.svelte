<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zM1 8a0.50.5 0 0 0 0.50.5H6v-1H1.5A0.50.5 0 0 0 1 8m14 0a0.50.5 0 0 1-0.50.5H10v-1h4.5a0.50.5 0 0 1 0.50.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
