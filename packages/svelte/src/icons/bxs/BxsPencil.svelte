<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.71 19.71 18 10.41 13.59 6l-9.29 9.29a1 1 0 0 0-0.260.46L3 21l5.24-1.03c0.18-0.040.34-0.130.47-0.26zM21 7.41a2 2 0 0 0 0-2.83L19.41 3a2 2 0 0 0-2.83 0L15 4.59 19.41 9 21 7.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
