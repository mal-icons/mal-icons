<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 4v16"}],["path",{"d":"M14 4v16"}],["path",{"d":"M6 4v5"}],["path",{"d":"M6 15v5"}],["path",{"d":"M10 4v5"}],["path",{"d":"M11 9h-6v6h6l0 -6"}],["path",{"d":"M10 15v5"}],["path",{"d":"M8 12h-0.01"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
