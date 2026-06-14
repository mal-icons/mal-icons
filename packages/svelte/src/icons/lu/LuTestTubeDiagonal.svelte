<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-0.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{"d":"m16 2 6 6"}],["path",{"d":"M12 16H4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
