<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 2H5c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h3.5l3.5 4 3.5-4H19c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM9 12a2 2 0 1 1 0-4A2 2 0 0 1 9 12zm6 0a2 2 0 1 1 0-4A2 2 0 0 1 15 12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
