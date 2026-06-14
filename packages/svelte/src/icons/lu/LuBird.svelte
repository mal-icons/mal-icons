<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 7h0.01"}],["path",{"d":"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{"d":"m20 7 2 0.5-2 0.5"}],["path",{"d":"M10 18v3"}],["path",{"d":"M14 17.75V21"}],["path",{"d":"M7 18a6 6 0 0 0 3.84-10.61"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
