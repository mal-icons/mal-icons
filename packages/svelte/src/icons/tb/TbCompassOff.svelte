<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 9l3 -1l-1 3m-1 3l-6 2l2 -6"}],["path",{"d":"M20.04 16.05a9 9 0 0 0 -12.09 -12.09m-2.32 1.68a9 9 0 1 0 12.73 12.73"}],["path",{"d":"M12 3v2"}],["path",{"d":"M12 19v2"}],["path",{"d":"M3 12h2"}],["path",{"d":"M19 12h2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
