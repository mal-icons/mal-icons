<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 10V14H14L14 10H21L21 14L21 21H3V10H10ZM8 12H5V19H19V16L19 12H16L16 16H8V12ZM16 3V9H8V3H16ZM14 5H10V7H14V5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
