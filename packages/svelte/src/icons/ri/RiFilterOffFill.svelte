<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.93 0.51L21.07 14.66L19.66 16.07L15.83 12.25L14 15V22H10V15L4 6H3V4L7.59 4L5.51 1.93L6.93 0.51ZM21 4V6H20L18.09 8.87L13.21 4H21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
