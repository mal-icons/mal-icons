<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 3H20C20.55 3 21 3.45 21 4V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.45 3.45 3 4 3ZM5 5V19H19V5H5ZM11 16L6.76 11.76L8.17 10.34L11 13.17L16.66 7.51L18.07 8.93L11 16Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
