<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M16 12h0.01"}],["path",{"d":"M8 12h0.01"}],["path",{"d":"M16 19h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
