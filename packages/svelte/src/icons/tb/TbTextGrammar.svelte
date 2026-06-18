<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M4 12v-5a3 3 0 1 1 6 0v5"}],["path",{"d":"M4 9h6"}],["path",{"d":"M20 6v6"}],["path",{"d":"M4 16h12"}],["path",{"d":"M4 20h6"}],["path",{"d":"M14 20l2 2l5 -5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
