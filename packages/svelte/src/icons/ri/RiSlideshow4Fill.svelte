<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.17 3C8.58 1.83 9.69 1 11 1H13C14.31 1 15.42 1.83 15.83 3H21C21.55 3 22 3.45 22 4V20C22 20.55 21.55 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3H8.17ZM10 9V15L15 12L10 9ZM11 3C10.45 3 10 3.45 10 4C10 4.55 10.45 5 11 5H13C13.55 5 14 4.55 14 4C14 3.45 13.55 3 13 3H11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
