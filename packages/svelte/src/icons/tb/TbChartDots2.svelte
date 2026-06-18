<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3v18h18"}],["path",{"d":"M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M11 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M21 3l-6 1.5"}],["path",{"d":"M14.11 6.65l2.77 3.7"}],["path",{"d":"M16 12.5l-5 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
