<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.59 18L21.19 22.61L22.61 21.19L2.81 1.39L1.39 2.81L3 4.41V22H5V16H12L12.72 17.45C12.89 17.79 13.24 18 13.62 18H16.59ZM21 6V16.76L7.24 3H12.38C12.76 3 13.11 3.21 13.28 3.55L14 5H20C20.55 5 21 5.45 21 6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
