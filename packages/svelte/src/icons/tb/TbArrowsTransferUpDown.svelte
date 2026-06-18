<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 21v-6"}],["path",{"d":"M20 6l-3 -3l-3 3"}],["path",{"d":"M10 18l-3 3l-3 -3"}],["path",{"d":"M7 3v2"}],["path",{"d":"M7 9v2"}],["path",{"d":"M17 3v6"}],["path",{"d":"M17 21v-2"}],["path",{"d":"M17 15v-2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
