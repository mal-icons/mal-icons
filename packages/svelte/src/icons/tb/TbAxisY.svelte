<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 20h-0.01"}],["path",{"d":"M15 20h-0.01"}],["path",{"d":"M19 20h-0.01"}],["path",{"d":"M4 7l3 -3l3 3"}],["path",{"d":"M7 20v-16"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
