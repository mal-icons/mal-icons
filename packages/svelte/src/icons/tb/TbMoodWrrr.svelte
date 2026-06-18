<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18"}],["path",{"d":"M8 16l1 -1l1.5 1l1.5 -1l1.5 1l1.5 -1l1 1"}],["path",{"d":"M8.5 11.5l1.5 -1.5l-1.5 -1.5"}],["path",{"d":"M15.5 11.5l-1.5 -1.5l1.5 -1.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
