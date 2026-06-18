<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 5h-8v10h8m-1 -5h-7"}],["path",{"d":"M6 20l0 0.01"}],["path",{"d":"M10 20l0 0.01"}],["path",{"d":"M14 20l0 0.01"}],["path",{"d":"M18 20l0 0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
