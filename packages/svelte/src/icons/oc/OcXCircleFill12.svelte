<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.76 10.24a6 6 0 1 1 8.49-8.49 6 6 0 0 1-8.49 8.49ZM6 4.76l-2-2L2.76 4l2 2-2 2L4 9.24l2-2 2 2L9.24 8l-2-2 2-2L8 2.76Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 12 12" {nodes} {...props} />
