<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23.41 8.79L18.02 13.78L16.61 12.36L18.87 10.27L14.04 9.69L12 5.28L11.22 6.97L9.71 5.47L12 0.5L15.39 7.84L23.41 8.79ZM8.46 9.87L5.13 10.27L8.7 13.57L7.75 18.35L12 15.97L16.25 18.35L16.08 17.49L8.46 9.87ZM18.62 20.04L19.05 22.21L12 18.26L4.95 22.21L6.52 14.28L0.59 8.79L6.66 8.07L1.39 2.81L2.81 1.39L22.61 21.19L21.19 22.61L18.62 20.04Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
