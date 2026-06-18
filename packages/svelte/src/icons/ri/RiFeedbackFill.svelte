<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.45 19L2 22.5V4C2 3.45 2.45 3 3 3H21C21.55 3 22 3.45 22 4V18C22 18.55 21.55 19 21 19H6.45ZM11 13V15H13V13H11ZM11 7V12H13V7H11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
