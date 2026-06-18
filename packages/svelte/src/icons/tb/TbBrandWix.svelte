<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 9l1.5 6l1.38 -5.51a0.64 0.64 0 0 1 1.24 0l1.38 5.52l1.5 -6"}],["path",{"d":"M13 11.5v3.5"}],["path",{"d":"M16 9l5 6"}],["path",{"d":"M21 9l-5 6"}],["path",{"d":"M13 9h0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
