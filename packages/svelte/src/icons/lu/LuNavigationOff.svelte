<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{"d":"M17.39 11.73 22 2l-9.73 4.61"}],["line",{"x1":"2","x2":"22","y1":"2","y2":"22"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
