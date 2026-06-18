<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 19V13.89L3 5V3H21V5L13 13.89V19H18V21H6V19H11ZM7.49 7H16.51L18.31 5H5.69L7.49 7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
