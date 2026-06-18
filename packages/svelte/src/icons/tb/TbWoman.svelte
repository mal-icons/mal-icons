<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 16v5"}],["path",{"d":"M14 16v5"}],["path",{"d":"M8 16h8l-2 -7h-4l-2 7"}],["path",{"d":"M5 11c1.67 -1.33 3.33 -2 5 -2"}],["path",{"d":"M19 11c-1.67 -1.33 -3.33 -2 -5 -2"}],["path",{"d":"M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
