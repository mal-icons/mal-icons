<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M8 16l-2.09 3.49a1 1 0 0 0 0.86 1.51h10.47a1 1 0 0 0 0.86 -1.51l-2.09 -3.49"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
