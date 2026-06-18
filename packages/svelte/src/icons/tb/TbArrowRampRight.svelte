<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 3l0 8.71"}],["path",{"d":"M11 7l-4 -4l-4 4"}],["path",{"d":"M17 14l4 -4l-4 -4"}],["path",{"d":"M7 21a11 11 0 0 1 11 -11h3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
