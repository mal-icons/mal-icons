<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 3H5c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zM9.5 13.5a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 9.5 13.5zm5 0a1.5 1.5 0 1 1 0-3A1.5 1.5 0 0 1 14.5 13.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
