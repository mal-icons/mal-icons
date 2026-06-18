<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 8a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M8 11a5 5 0 1 0 4 2"}],["path",{"d":"M12 19a5 5 0 1 0 4 -8"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
