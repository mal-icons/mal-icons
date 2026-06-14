<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.41 14.41C21 12.83 22 11.5 22 9.5a5.5 5.5 0 0 0-9.59-3.680.60.6 0 0 1-0.820A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.54 5.36a2 2 0 0 0 2.880.05 2.12 2.12 0 0 00-3 2.12 2.12 0 1 0 3-3 2.12 2.12 0 0 0 3 0 2 2 0 0 0 0-2.83l-1.88-1.88a2.41 2.41 0 0 0-3.41 0l-1.71 1.71a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l2.82-2.76"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
