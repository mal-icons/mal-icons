<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 2H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h4l3 3 3-3h4c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 16h-4.83l-0.590.59L12 20.17l-1.59-1.59-0.58-0.58H5V4h14v14zm-7-1 1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
