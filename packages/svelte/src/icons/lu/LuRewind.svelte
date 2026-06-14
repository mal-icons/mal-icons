<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 6a2 2 0 0 0-3.41-1.41l-6 6a2 2 0 0 0 0 2.83l6 6A2 2 0 0 0 12 18z"}],["path",{"d":"M22 6a2 2 0 0 0-3.41-1.41l-6 6a2 2 0 0 0 0 2.83l6 6A2 2 0 0 0 22 18z"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
