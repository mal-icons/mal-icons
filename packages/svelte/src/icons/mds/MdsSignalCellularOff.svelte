<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21 1-8.31 8.31 8.31 8.3zM4.91 4.36 3.5 5.77l6.36 6.37L1 21h17.73l2 2 1.41-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
