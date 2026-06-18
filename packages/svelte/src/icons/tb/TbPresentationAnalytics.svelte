<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 12v-4"}],["path",{"d":"M15 12v-2"}],["path",{"d":"M12 12v-1"}],["path",{"d":"M3 4h18"}],["path",{"d":"M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"}],["path",{"d":"M12 16v4"}],["path",{"d":"M9 20h6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
