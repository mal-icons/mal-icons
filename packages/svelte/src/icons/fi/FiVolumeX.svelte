<script lang="ts">
  import type { NodeTuple } from "@mal-icon/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["polygon",{"points":"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}],["line",{"x1":"23","y1":"9","x2":"17","y2":"15"}],["line",{"x1":"17","y1":"9","x2":"23","y2":"15"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
