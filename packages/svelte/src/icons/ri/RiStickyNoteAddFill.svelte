<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 1V4H1V6H4V9H6V6H9V4H6V1H4ZM11 5C11 8.31 8.31 11 5 11C4.3 11 3.63 10.88 3 10.66V20.01C3 20.56 3.45 21 4 21H14V15C14 14.45 14.45 14 15 14H21V4C21 3.45 20.56 3 20.01 3H10.66C10.88 3.63 11 4.3 11 5ZM21 16L16 21V16H21Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
