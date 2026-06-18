<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-0.58 3.41c-0.36 0.36 -0.86 0.59 -1.42 0.59h-12a2 2 0 0 1 -2 -2v-12c0 -0.55 0.22 -1.05 0.59 -1.41"}],["path",{"d":"M12 4v4m1.5 1.5l0.5 -0.5l2 2v-7"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
