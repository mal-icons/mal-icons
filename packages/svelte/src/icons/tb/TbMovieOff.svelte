<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-0.59 3.42c-0.36 0.36 -0.86 0.58 -1.41 0.58h-12a2 2 0 0 1 -2 -2v-12c0 -0.54 0.21 -1.03 0.56 -1.39"}],["path",{"d":"M8 8v12"}],["path",{"d":"M16 4v8m0 4v4"}],["path",{"d":"M4 8h4"}],["path",{"d":"M4 16h4"}],["path",{"d":"M4 12h8m4 0h4"}],["path",{"d":"M16 8h4"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
