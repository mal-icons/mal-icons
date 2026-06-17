<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.88 10.41a2.5 2.5 0 0 0-3.46 3.47zm0.710.71-3.46 3.47a2.5 2.5 0 0 0 3.47-3.46m-4.56-1.1a3.5 3.5 0 1 1 4.95 4.95 3.5 3.5 0 0 1-4.95-4.95ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.26A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.54-3.39Q8.84 9 8 9c-5 0-6 3-6 4"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
