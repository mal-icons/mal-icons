<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 6a2 2 0 0 1 3.41-1.41l6 6a2 2 0 0 1 0 2.83l-6 6A2 2 0 0 1 12 18z"}],["path",{"d":"M2 6a2 2 0 0 1 3.41-1.41l6 6a2 2 0 0 1 0 2.83l-6 6A2 2 0 0 1 2 18z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
