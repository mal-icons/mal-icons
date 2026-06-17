<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.930.59 7 3l1.5 4-2 3L8 15C22.53 5.4 13.76-2.21 8.930.59M7.360.77 5.5 3 7 7l-1.5 3 1.82 4.54C-6.53 4.96 2.69-2.47 7.360.77"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
