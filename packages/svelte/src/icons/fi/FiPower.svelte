<script lang="ts">
  import type { NodeTuple } from "@mal-icon/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.36 6.64a9 9 0 1 1-12.73 0"}],["line",{"x1":"12","y1":"2","x2":"12","y2":"12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
