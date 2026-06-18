<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 7V11L2 6L8 1V5H13C17.42 5 21 8.58 21 13C21 17.42 17.42 21 13 21H4V19H13C16.31 19 19 16.31 19 13C19 9.69 16.31 7 13 7H8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
