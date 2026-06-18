<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 20v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5"}],["path",{"d":"M15 20h-0.01"}],["path",{"d":"M20 20h-0.01"}],["path",{"d":"M20 15h-0.01"}],["path",{"d":"M20 9h-0.01"}],["path",{"d":"M20 4h-0.01"}],["path",{"d":"M15 4h-0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
