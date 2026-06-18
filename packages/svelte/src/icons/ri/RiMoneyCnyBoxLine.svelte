<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3H21C21.56 3 22 3.45 22 4V20C22 20.56 21.56 21 21 21H3C2.45 21 2 20.56 2 20V4C2 3.45 2.45 3 3 3ZM4 5V19H20V5H4ZM13 13H16V15H13V17H11V15H8V13H11V12H8V10H10.59L8.47 7.88L9.88 6.47L12 8.59L14.13 6.47L15.54 7.88L13.42 10H16V12H13V13Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
