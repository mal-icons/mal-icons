<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 5V4c0-1.1-0.9-2-2-2H8c-0.86 0-1.580.54-1.87 1.3L7.83 5H18zm-2 6 2-3V7H9.83L16 13.17zM2.1 3.51a11 0 0 0 0 1.41l5.9 5.9V20c0 1.10.9 2 2 2h4c1.1 0 2-0.9 2-2v-1.17l3.07 3.07a11 0 1 0 1.41-1.41L3.51 3.51a11 0 0 0-1.41 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
