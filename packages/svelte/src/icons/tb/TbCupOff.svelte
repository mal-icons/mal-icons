<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 8h-3v3h6m4 0h4v-3h-7"}],["path",{"d":"M17.5 11l-0.32 2.15m-0.52 3.5l-0.65 4.35h-8l-1.5 -10"}],["path",{"d":"M6 8v-1c0 -0.3 0.06 -0.58 0.18 -0.83m2.82 -1.17h7a2 2 0 0 1 2 2v1"}],["path",{"d":"M15 5v-2"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
