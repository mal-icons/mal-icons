<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2C20.55 2 21 2.45 21 3V21C21 21.55 20.55 22 20 22H6C5.45 22 5 21.55 5 21V19H3V17H5V15H3V13H5V11H3V9H5V7H3V5H5V3C5 2.45 5.45 2 6 2H20ZM14 8H12V11H9V13H12L12 16H14L14 13H17V11H14V8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
