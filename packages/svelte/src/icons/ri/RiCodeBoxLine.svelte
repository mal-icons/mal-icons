<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3ZM4 5V19H20V5H4ZM20 12L16.46 15.54L15.05 14.12L17.17 12L15.05 9.88L16.46 8.46L20 12ZM6.83 12L8.95 14.12L7.54 15.54L4 12L7.54 8.46L8.95 9.88L6.83 12ZM11.24 17H9.12L12.76 7H14.88L11.24 17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
