<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.41 5H21C21.55 5 22 5.45 22 6V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H10.41L12.41 5ZM4 5V19H20V7H11.59L9.59 5H4ZM12 9V13H16C16 15.21 14.21 17 12 17C9.79 17 8 15.21 8 13C8 10.79 9.79 9 12 9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
