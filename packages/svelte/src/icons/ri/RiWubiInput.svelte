<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 21V19H6.66L7.9 12H5V10H8.25L9.13 5H4V3H20V5H11.16L10.28 10H18V19H21V21H3ZM16 12H9.93L8.69 19H16V12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
